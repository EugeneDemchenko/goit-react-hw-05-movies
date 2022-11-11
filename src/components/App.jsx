import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from './pages/home/Home'
import Header from "./Header/Header";
import Movies from './pages/movies/Movies'


export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index  element={<Home />} />
          <Route path="/movies" element={<Movies />}/>
        </Route>
      </Routes>
    </div>
  );
};
