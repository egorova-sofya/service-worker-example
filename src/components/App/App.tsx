import Test from './../Test';
import React, { FC } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import '../../styles.css';
import Main from './../Main';
import Api from './../Api';

export const App: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/test" element={<Test />} />
        <Route path="/api" element={<Api />} />
      </Routes>
    </>
  );
};
