const CACHE = 'workbuddy-v1';
const ASSETS = [
  '/workbuddy/',
  '/workbuddy/index.html',
  '/workbuddy/workbuddy-manifest.json',
  '/workbuddy/workbuddy-icon-192.png',
  '/workbuddy/workbuddy-icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
