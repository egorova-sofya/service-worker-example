const _self = self as unknown as ServiceWorkerGlobalScope;
const version = 'v0.0.4';

// declare var self: ServiceWorkerGlobalScope;
// declare var self: ServiceWorkerGlobalScope;

const cashKey = 'cashData';

_self.addEventListener('install', (e) => {
  //фаза install кеширует необходимы для работы сервис воркера ресурсы
  console.log('install');
  e.waitUntil(
    caches.open(cashKey).then((cache) => {
      return cache.addAll(['/']);
    })
  );
});
