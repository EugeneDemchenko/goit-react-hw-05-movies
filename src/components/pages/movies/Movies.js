import  { useState, useEffect } from "react";
import { BsSearch } from 'react-icons/bs';
import { SearchMovies } from "../../APIMovie";
import { Link } from "react-router-dom";
// import PropTypes from 'prop-types'
import './Movies.css'

export default function Movies() {
    
    const [searchQuery, setSearchQuery] = useState('')

    const handleSearchChange = e => {
        setSearchQuery(e.currentTarget.value.toLowerCase().trim() )
    }    

    const handleSubmit = e => {
        e.preventDefault();
        if (searchQuery.trim() === '') {
            alert('Empty field')
            return
        }
        setSearchQuery('')
    }
    // useEffect(() => {
    //     GetSearchMovies(query).then(data => setSearch(data));
    //     }, [query]);

    return (
        <div className="searchbar">
            <form className="form" onSubmit={handleSubmit}>
                <button type="submit" className="searchButton">
                    <BsSearch style={{ height: 20, width: 20, fill: 'red'}} />
                </button>

                <input
                    className="input"
                    type="text"
                    placeholder="Search movie"
                    value = {searchQuery}
                    onChange={handleSearchChange}
                />
            </form>
        </div>
    )
}

// Searchbar.propTypes = {
//     submit: PropTypes.func.isRequired
// }