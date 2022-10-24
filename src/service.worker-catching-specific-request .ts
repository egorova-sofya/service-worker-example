const _self = self as unknown as ServiceWorkerGlobalScope;

_self.addEventListener('fetch', (e) => {
  const url = e.request.url;
  if (url.indexOf('/api/') !== -1 && url.split('?')[0].indexOf('/api/') !== -1) {
    e.respondWith(
      (async () => {
        try {
          const response = await fetch(e.request);
          console.log('response', response);
          if (response.status === 200) {
            return response;
          } else {
            throw Error();
          }
        } catch (e) {
          return new Response(JSON.stringify({ status: 'unreachable' }), {
            headers: { 'Content-Type': 'application/json; charset=utf-8' },
            status: 200,
            statusText: 'OK',
          });
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
  }
});
