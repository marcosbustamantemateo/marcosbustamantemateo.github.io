var CACHE_NAME = 'mbm';
var URLS_TO_CACHE = [
  '/',
  '/index.html',
  '/funtions.js',
  '/styles.css',
  '/traje.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(URLS_TO_CACHE);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
          return response ? response : fetch(event.request);
      }
    )
  );
});
