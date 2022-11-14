import { GetMovieCredits } from "../APIMovie";
import { useState, useEffect  } from "react";
import { useParams} from "react-router-dom"


export function Cast () {
    const [movie, setMovie] = useState([])
    const {movieId} = useParams()
    useEffect(() => { GetMovieCredits(movieId).then(data => setMovie(data))}, [movieId])
    if (!movie) return null
    
    return (
        <>
            <ul>
                {movie.map(({ id, profile_path, name, character }) => (
                    <li key={id}>
                        <img src={`https://image.tmdb.org/t/p/w500/${profile_path}`} alt={name} />
                        <h3>{name}</h3>
                        <h3>Character: {character}</h3>
                    </li>
                ))}
            </ul>
        </>
    )
}