import { GetTrending } from "../../APIMovie";
import { useState, useEffect } from "react";
import {  Link } from 'react-router-dom'
import { Outlet } from "react-router-dom"

export const Home = () => {
    const [movie, setMovie] = useState([])
    useEffect(()=>{GetTrending().then(data=>setMovie(data))}, [])

    return (
        <>
            <h1>Trending today</h1>
            <ul>
                {movie.map(({ id, title }) => (
                    <li key={id}>
                        <Link to={`/movies/${id}`}>{title}</Link>
                    </li>
                ))}
            </ul>
            <Outlet />
        </>
    )
}