import { Routes, Route } from "react-router-dom";
// import { lazy } from 'react';
// import React from "react";
import {Home} from './pages/home/Home'
// import { Nav } from "./Nav/Nav";
import Header from "./Header/Header";
import Movies from './pages/movies/Movies'
import { MovieDetails } from "./pages/movieDetails/MovieDetails";
import { Cast } from "./Cast/Cast";
import { Review } from "./Review/Review";
// const MovieDetails = lazy(() => import('./pages/movieDetails/MovieDetails'));


export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index  element={<Home />} />
          <Route path="/movies" element={<Movies/>} />
          <Route path="/movies/:movieId" element={<MovieDetails/>}>
            <Route path="cast" element={<Cast/>} />
            <Route path="reviews" element={<Review/>}/>
          </Route>
        </Route>
      </Routes>
    </div>
  );
};


// export const App = () => {
//   return (
//     <>
//       <Nav/>
//         <Routes>
//           <Route path="/" element={<Home/>}/>
//           <Route path="/movies" element={<Movies/>}/>
//           <Route path="/movies/:movieId" element={<MovieDetails/>}>
//             <Route path="cast" element={<Cast/>} />
//             <Route path="reviews" element={<Review/>}/>
//           </Route>
        
//         </Routes>
//     </>
//     )
// }