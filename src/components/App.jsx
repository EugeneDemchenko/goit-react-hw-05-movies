import { Routes, Route, Navigate } from "react-router-dom";
import {Home} from './pages/home/Home'
import Header from "./Header/Header";
import Movies from './pages/movies/Movies'
import { MovieDetails } from "./pages/movieDetails/MovieDetails";
import { Cast } from "./Cast/Cast";
import { Review } from "./Review/Review";


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
        <Route path="*" element={<Navigate to='/'/> } />
      </Routes>
    </div>
  );
};
