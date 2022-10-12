import Test from './../Test';
import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import '../../styles.css';
import Main from './../Main';

export const App: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </>
  );
};
