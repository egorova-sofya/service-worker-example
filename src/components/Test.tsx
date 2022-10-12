import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Test = () => {
  const [testData, setTestData] = useState<Array<any>>();
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => response.json())
      .then((json) => setTestData(json));
  }, []);
  // console.log(testData);
  return (
    <>
      <Link to="/" relative="path">
        Main
      </Link>
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
