const _self = self as unknown as ServiceWorkerGlobalScope;

_self.addEventListener('fetch', (e) => {
  let videoSize: number;
  let videoData: Promise<File>;

  let fullVideoProgress = 0;
  fetch('https://frontend.karpovcourses.net/homework/sw/1/stat')
    .then((res) => res.json())
    .then((res1) => {
      console.log('RES from swr ', res1);
      videoSize = res1.size;
    })
    .catch((error) => {
      console.error(error);
    });

  while (videoSize && fullVideoProgress < videoSize) {
    fetch('https://frontend.karpovcourses.net/homework/sw/1', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        credentials: 'include',
      },
      body: JSON.stringify({
        from: fullVideoProgress,
        to: fullVideoProgress + 100000,
      }),
    })
      .then((response) => {
        const reader = response?.body?.getReader();
        return new ReadableStream({
          start(controller) {
            return pump();
            function pump() {
              return reader?.read().then(({ done, value }) => {
                // When no more data needs to be consumed, close the stream

                if (done) {
                  controller.close();
                  return;
                }
                // Enqueue the next data chunk into our target stream
                controller.enqueue(value);
                return pump();
              });
            }
          },
        });
      })
      .then((stream) => new Response(stream))
      .then((response) => response.blob())
      .then((blob) => (videoData = blob.text().then((res) => new File([res], '756765'))))
      .then(() => console.log('videoData', videoData))

      // .then((blob) => URL.createObjectURL(blob))
      // .then((url) => (videoData = url))
      .catch((err) => console.error('SW ERROR', err))
      .then(() => (fullVideoProgress += 100000));
  }

  setTimeout(() => {
    console.log('videoData', videoData);
  }, 2000);

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
