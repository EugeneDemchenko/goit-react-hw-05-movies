import { GetMovieReviews } from "../APIMovie";
import { useState, useEffect  } from "react";
// import {  Link } from 'react-router-dom'
import { useParams} from "react-router-dom"


export function Review () {
    const [movie, setMovie] = useState('')
    const {movieId} = useParams()
    useEffect(() => { GetMovieReviews(movieId).then(data => setMovie(data))}, [movieId])
    if (!movie) return 
    console.log(movie);
    
    return (
        <>
            {movie.length !== 0 ?
                <ul>
                    {movie.map(({ id, author, content }) => (
                        <li key={id}>
                            <h3>{author}</h3>
                            <p>{content}</p>
                        </li>
                    ))}
                </ul>
            : <h2>We don't have any reviews for this movie</h2>
            }
            
        </>
    )
}