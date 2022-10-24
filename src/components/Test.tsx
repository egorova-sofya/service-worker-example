import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Test = () => {
  const [testData, setTestData] = useState<Array<any>>();
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/api/test')
      .then((response) => response.json())
      .then((json) => setTestData(json));
  }, []);
  // console.log(testData);
  return (
    <>
      <Link to="/">Main</Link>
      <p>
        <Link to="/api">api</Link>
      </p>{' '}
      {/* {testData &&
        testData.map((item) => (
          <p key={item.id} style={{ color: '#fff' }}>
            {item.id}
          </p>
        ))} */}
    </>
  );
};

export default Test;
