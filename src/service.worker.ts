const _self = self as unknown as ServiceWorkerGlobalScope;

_self.addEventListener('fetch', (e) => {
  e.respondWith(
    (async () => {
      if (e.request.url.search(/\/api\//gm) !== -1) {
        try {
          const response = await fetch(e.request);
          return response;
        } catch (e) {
          return new Response('', {
            status: 200,
            statusText: 'unreachable',
          });
        }
      }
      try {
        const response = await fetch(e.request);
        return response;
      } catch (e) {}
      return new Response('', {
        status: 502,
        statusText: 'No Connection',
      });
    })()
  );
});
