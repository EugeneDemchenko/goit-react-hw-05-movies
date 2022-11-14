import { GetMovieDetails } from "../../APIMovie";
import { useState, useEffect  } from "react";
import { Outlet, useParams, NavLink, Link, useLocation } from "react-router-dom"

export function MovieDetails() {
    const location = useLocation()
    const [movie, setMovie] = useState('')
    const { movieId } = useParams()
    useEffect(() => { GetMovieDetails(movieId).then(data => setMovie(data))}, [movieId])
    if (!movie) return
    
    return (
        <div>
            <Link to={location.state ? location.state : '/'} type="button" style={{display: 'block'}}>Go back</Link>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <div>
                <h1>{movie.title}</h1>
                <h2>User score: </h2>
                <p>{movie.vote_average}</p>
                <h2>Overview</h2>
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
                            <NavLink to="cast" state={location.state}>Cast</NavLink>
                        </li>
                        <li>
                            <NavLink to="reviews" state={location.state}>Reviews</NavLink>
                        </li>
                    </ul>
            </div>
            <Outlet />
        </div>
    )
}
