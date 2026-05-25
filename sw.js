self.addEventListener('install', () => self.skipWaiting())
self.addEventListener('activate', () => self.clients.claim())
self.addEventListener('fetch', e => {
  if (e.request.url.includes('api.anthropic.com') || e.request.url.includes('googleapis.com') || e.request.url.includes('cdnjs')) return;
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)))
})
