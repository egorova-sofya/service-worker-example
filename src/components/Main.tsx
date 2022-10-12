import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
  const [testData, setTestData] = useState<Array<any>>();
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((json) => setTestData(json));
  }, []);
  return (
    <>
      <Link to="/test" relative="path">
        Test
      </Link>
      {testData &&
        testData.map((item) => (
          <p key={item.id} style={{ color: '#fff' }}>
            {item.title}
          </p>
        ))}
      <h1 style={{ color: '#fff' }}>hi</h1>
    </>
  );
};

export default Main;
