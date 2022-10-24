import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Api = () => {
  const [testData, setTestData] = useState<Array<any>>();
  // useEffect(() => {
  //   fetch('https://api')
  //     .then((response) => response.json())
  //     .then((json) => setTestData(json));
  // }, []);
  // console.log(testData);
  return (
    <>
      api
      <Link to="/">Main</Link>
      <p>
        <Link to="/test">Test</Link>
      </p>
      {/* {testData &&
        testData.map((item) => (
          <p key={item.id} style={{ color: '#fff' }}>
            {item.id}
          </p>
        ))} */}
    </>
  );
};

export default Api;
