import  { useState, useEffect } from "react";
import { BsSearch } from 'react-icons/bs';
import { SearchMovies } from "../../APIMovie";
import { Link, useLocation, useSearchParams } from "react-router-dom";

import './Movies.css'

export default function Movies() {
    const location = useLocation()
    const [input, setInput] = useState()
    const [search, setSearch] = useSearchParams()
    const query = search.get('query')
    const [found, setFound] = useState([])
    
    useEffect(() => {
        query && SearchMovies(query).then(data => setFound(data));
        }, [query]);

    const handleSearchChange = e => {
        setInput(e.currentTarget.value.toLowerCase() )
    }    

    const handleSubmit = e => {
        e.preventDefault();
        if (input.trim() === '') {
            alert('Empty field')
            return
        }
        setSearch({ query: input })
        setInput('')
    }

    
    return (<>
        <div className="searchbar">
            <form className="form" onSubmit={handleSubmit}>
                <button type="submit" className="searchButton">
                    <BsSearch style={{ height: 20, width: 20, fill: 'red'}} />
                </button>
                <input
                    className="input"
                    type="text"
                    placeholder="Search movie"
                    onChange={handleSearchChange}
                    value = {input}
                />
            </form>
        </div>
        <div>
            <ul>
                {found.map(({id, title,}) => (
                    <li key={id}>
                        <Link to={`/movies/${id}`} state={location}>{title}</Link>
                    </li>
            ))}
            </ul>
        </div>
        </>
    )
}
