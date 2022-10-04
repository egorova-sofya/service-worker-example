const _self = self as unknown as ServiceWorkerGlobalScope;
const version = 'v0.0.4';

// declare var self: ServiceWorkerGlobalScope;
// declare var self: ServiceWorkerGlobalScope;

const cacheKey = 'cashData_v0.0.1';

_self.addEventListener('install', (e) => {
  //фаза install кеширует необходимы для работы сервис воркера ресурсы
  console.log('install');
  e.waitUntil(
    caches.open(cacheKey).then((cache) => {
      return cache.addAll(['/']);
    })
  );
});

_self.addEventListener('activate', (e) => {
  //чистка кэша
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(keys.filter((key) => key !== cacheKey).map((key) => caches.delete(key))).then(() =>
        console.log(keys)
      );
    })
  );
});

_self.addEventListener('fetch', async (e) => {
  const url = e.request.url;
  const isRequestImperceptible = url.startsWith('http') && e.request.method.toUpperCase() == 'GET';
  if (isRequestImperceptible) {
    console.log('fetch url', url);
    try {
      const response = await fetch(e.request);
      const cache = await caches.open(cacheKey);
      await cache.put(e.request, response);
      return response;
    } catch (e) {
      console.error('sw error', e);
    }
  }
});
