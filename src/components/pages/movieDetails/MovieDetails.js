import { GetMovieDetails } from "../../APIMovie";
import { useState, useEffect  } from "react";
// import {  Link } from 'react-router-dom'
import { Outlet, useParams, NavLink } from "react-router-dom"

export function MovieDetails(){
    const [movie, setMovie] = useState('')
    const {movieId} = useParams()
    useEffect(() => { GetMovieDetails(movieId).then(data => setMovie(data))}, [movieId])
    // console.log(movie);
    if (!movie) return
    
    return (
        <div>
            <NavLink to='/' type="button" style={{display: 'block'}}>Go back</NavLink>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <div>
                <h1>{movie.title}</h1>
                <h2>{`User score: ${movie.vote_average}`}</h2>
                <h2>Overvie</h2>
                <p>{movie.overview}</p>
                <h2>Genres</h2>
                <ul>
                    {movie.genres.map(({ id, name }) => (
                        <li key={id}>{name}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h3>Additional Information</h3>
                    <ul>
                        <li>
                            <NavLink to="cast">Cast</NavLink>
                        </li>
                        <li>
                            <NavLink to="reviews">Reviews</NavLink>
                        </li>
                    </ul>
            </div>
            <Outlet />
        </div>
    )
}
