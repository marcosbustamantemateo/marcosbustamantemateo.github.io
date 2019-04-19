var CACHE_NAME = 'mbm';
var URLS_TO_CACHE = [
  '/',
  '/index.html',
  '/funtions.js',
  '/styles.css',
  '/traje.png'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(URLS_TO_CACHE);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
          return response ? response : fetch(event.request);
      }
    )
  );
});
