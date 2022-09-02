const _self = self as unknown as ServiceWorkerGlobalScope;
const version = 'v0.0.4';

// declare var self: ServiceWorkerGlobalScope;
// declare var self: ServiceWorkerGlobalScope;

const cashKey = 'cashData_v0.0.1';

_self.addEventListener('install', (e) => {
  //фаза install кеширует необходимы для работы сервис воркера ресурсы
  console.log('install');
  e.waitUntil(
    caches.open(cashKey).then((cache) => {
      return cache.addAll(['/']);
    })
  );
});

_self.addEventListener('activate', (e) => {
  //чистка кэша
  console.log('install');
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(keys.filter((key) => key !== cashKey).map((key) => caches.delete(key))).then(() =>
        console.log(keys)
      );
    })
  );
});
