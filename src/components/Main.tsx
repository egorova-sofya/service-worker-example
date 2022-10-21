import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button/Button';

const Main = () => {
  const [testData, setTestData] = useState('');
  useEffect(() => {
    // fetch('https://frontend.karpovcourses.net/homework/sw/1?from=32&to=3', {
    fetch('https://frontend.karpovcourses.net/homework/sw/1', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        credentials: 'include',
      },
      body: JSON.stringify({
        from: 2,
        to: 100000,
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

      .then((blob) => URL.createObjectURL(blob))
      .then((url) => setTestData(url))
      .catch((err) => console.error(err));

    // .then((response) => response.json())
    // .then((json) => setTestData(json));
    // .then((json) => setTestData(json.body));
  }, []);

  // useEffect(() => {
  //   console.log(testData);
  // }, [testData]);

  const file = new File([testData], 'gogo.mp4');
  // console.log(file.stream());

  return (
    <>
      {/* <video controls src="mega-file"  autoPlay width="400" height="240"></video> */}
      {/* <video width="320" height="240" controls>
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <a style={{ color: '#fff' }} href={testData} download={'bla.mp4'}>
        Download
      </a>

      <video width="320" height="240" controls>
        <source src={testData} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </>
  );
};

export default Main;
