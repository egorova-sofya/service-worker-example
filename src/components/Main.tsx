import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button/Button';

const Main = () => {
  const [testData, setTestData] = useState<Array<any>>();
  useEffect(() => {
    // fetch('https://frontend.karpovcourses.net/homework/sw/1?from=32&to=3', {
    fetch('https://frontend.karpovcourses.net/homework/sw/1', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 2,
        to: 34,
      }),
    })
      // .then((response) => response.json())
      // .then((json) => setTestData(json));
      .then((json) => console.log('JSON', json));
  }, []);

  return (
    <>
      <div className="grid" id="grid"></div>

      <Link to="/test">Test</Link>
      <p>{/* <Link to="/api">api</Link> */}</p>
      {/* {testData &&
        testData.map((item) => (
          <p key={item.id} style={{ color: '#fff' }}>
            {item.title}
          </p>
        ))} */}
      <h1 style={{ color: '#fff' }}>hi</h1>

      <video controls src="mega-file" autoPlay width="400" height="240"></video>
    </>
  );
};

export default Main;
