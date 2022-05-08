import React from 'react';
import style from './main.module.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../home/home';
import Info from '../info/info';

const Main = (props) => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/info" element={<Info />} />
    </Routes>
  );
};

export default Main;
