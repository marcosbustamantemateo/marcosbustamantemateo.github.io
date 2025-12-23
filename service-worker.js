// Service Worker for caching and performance optimization
const CACHE_VERSION = 'v1';
const CACHE_NAME = `portfolio-cache-${CACHE_VERSION}`;

// Cache duration in milliseconds
const CACHE_DURATION = {
  STATIC: 365 * 24 * 60 * 60 * 1000, // 1 year for static assets
  IMAGES: 30 * 24 * 60 * 60 * 1000,  // 30 days for images
  API: 5 * 60 * 1000,                 // 5 minutes for API calls
};

// Assets to cache immediately on install
const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/logo.ico',
  '/favicon.ico',
];

// Install event - precache essential assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_ASSETS);
    }).then(() => {
      return self.skipWaiting();
    })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    }).then(() => {
      return self.clients.claim();
    })
  );
});

// Fetch event - implement caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip cross-origin requests
  if (url.origin !== location.origin) {
    // For external resources like Google Analytics, fonts, etc.
    if (shouldCacheExternalResource(url)) {
      event.respondWith(staleWhileRevalidate(request));
    }
    return;
  }

  // Handle different types of requests with appropriate strategies
  if (request.method !== 'GET') {
    return;
  }

  // Images - Cache First strategy with fallback
  if (request.destination === 'image' || isImageRequest(url.pathname)) {
    event.respondWith(cacheFirst(request, CACHE_DURATION.IMAGES));
    return;
  }

  // Static assets (JS, CSS) - Cache First with long duration
  if (isStaticAsset(url.pathname)) {
    event.respondWith(cacheFirst(request, CACHE_DURATION.STATIC));
    return;
  }

  // API requests - Network First with cache fallback
  if (url.pathname.includes('/api/') || url.hostname.includes('firestore') || url.hostname.includes('firebase')) {
    event.respondWith(networkFirst(request, CACHE_DURATION.API));
    return;
  }

  // HTML pages - Network First strategy
  if (request.destination === 'document' || url.pathname.endsWith('.html')) {
    event.respondWith(networkFirst(request));
    return;
  }

  // Default - Stale While Revalidate
  event.respondWith(staleWhileRevalidate(request));
});

// Cache First strategy - serve from cache, fallback to network
async function cacheFirst(request, maxAge = CACHE_DURATION.STATIC) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request);

  if (cached) {
    // Check if cache is still fresh
    const cacheTime = await getCacheTime(request);
    if (cacheTime && Date.now() - cacheTime < maxAge) {
      return cached;
    }
  }

  try {
    const response = await fetch(request);
    if (response.ok) {
      await cache.put(request, response.clone());
      await setCacheTime(request);
    }
    return response;
  } catch (error) {
    if (cached) {
      return cached; // Return stale cache if network fails
    }
    throw error;
  }
}

// Network First strategy - try network, fallback to cache
async function networkFirst(request, maxAge) {
  const cache = await caches.open(CACHE_NAME);

  try {
    const response = await fetch(request);
    if (response.ok) {
      await cache.put(request, response.clone());
      if (maxAge) {
        await setCacheTime(request);
      }
    }
    return response;
  } catch (error) {
    const cached = await cache.match(request);
    if (cached) {
      // Check cache age if maxAge is specified
      if (maxAge) {
        const cacheTime = await getCacheTime(request);
        if (cacheTime && Date.now() - cacheTime < maxAge) {
          return cached;
        }
      } else {
        return cached;
      }
    }
    throw error;
  }
}

// Stale While Revalidate - serve cache immediately, update in background
async function staleWhileRevalidate(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request);

  const fetchPromise = fetch(request).then((response) => {
    if (response.ok) {
      cache.put(request, response.clone());
    }
    return response;
  });

  return cached || fetchPromise;
}

// Helper functions
function isImageRequest(pathname) {
  return /\.(jpg|jpeg|png|gif|webp|svg|ico)$/i.test(pathname);
}

function isStaticAsset(pathname) {
  return /\.(js|css|woff|woff2|ttf|eot)$/i.test(pathname);
}

function shouldCacheExternalResource(url) {
  const cacheableHosts = [
    'fonts.googleapis.com',
    'fonts.gstatic.com',
    'cdnjs.cloudflare.com',
  ];
  return cacheableHosts.some(host => url.hostname.includes(host));
}

// Cache timestamp management
async function setCacheTime(request) {
  const timeCache = await caches.open(`${CACHE_NAME}-times`);
  const timestamp = new Response(Date.now().toString());
  await timeCache.put(request, timestamp);
}

async function getCacheTime(request) {
  const timeCache = await caches.open(`${CACHE_NAME}-times`);
  const cached = await timeCache.match(request);
  if (cached) {
    const text = await cached.text();
    return parseInt(text, 10);
  }
  return null;
}
