const CACHE_NAME = 'ruralog-v1';
const ASSETS = [
  './',
  './index.html',
  './industria.html',
  './consumidor.html',
  './manifest.json',
  './css/style.css',
  './js/db.js',
  './js/seed.js',
  './js/ui.js',
  './vendor/qrcode.min.js',
  'https://unpkg.com/lucide@latest'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        // Usa Promise.allSettled para não falhar a instalação inteira se um recurso falhar
        return Promise.allSettled(
          ASSETS.map(url => cache.add(url).catch(err => console.warn('Cache falhou para:', url)))
        );
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
