import React, { FC, useEffect, useState } from 'react';
import '../../styles.css';
import Button from '../Button/Button';
import Header from '../Header/Header';

export const App: FC = () => {
  const [testData, setTestData] = useState<{ title: string }>();
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((json) => setTestData(json));
  }, []);
  return (
    <>
      <Header />
      <h2>{testData?.title}</h2>
      <picture>
        <source media="(min-width: 1220px)" srcSet={require('../../img/desktop-bg.jpg')} />
        <source media="(min-width: 988px)" srcSet={require('../../img/tablet-bg.jpg')} />

        <img className="image" src={require('../../img/mobile-bg.jpg')} alt="background" />
      </picture>
      <main className="main">
        <p className="main__slogan">Путешествовать — круто!</p>
        <Button>Поехали с нами</Button>
      </main>
    </>
  );
};
