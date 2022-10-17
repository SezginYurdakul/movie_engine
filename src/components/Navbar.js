import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { MovieContext } from '../contexts/MovieProvider';

export default function Navbar() {
    const { setCategory, searchMovies } = useContext(MovieContext);
    const [searchText, setSearchText] = useState("");
    const navigate = useNavigate();

    const handleClick = (e) => { setCategory(e.target.id); navigate('/') }
    const handleSearch = () => { searchMovies(searchText); navigate('/searchList') }
    const handleKeyDown = (event) => { if (event.key === 'Enter') { handleSearch() } }

    return (
        <nav className="navbar">
            <div onClick={() => { setCategory('top_rated'); navigate('/') }} className="logo">
                <h1>MOVIE</h1>
                <h1>ENGINE</h1>
            </div>

            <ul className="menu">
                <li id="top_rated" onClick={handleClick}> Top Rated </li>
                <li id="now_playing" onClick={handleClick}>Now Playing</li>
                <li id="popular" onClick={handleClick}>Popular</li>
                <li id="upcoming" onClick={handleClick}> Upcoming</li>
                <li onClick={() => navigate('/favorites')}> Watch Later</li>
            </ul>
            <div className="search">
                <input id="searchText" type="search" placeholder=" Search" value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    onKeyDown={handleKeyDown} />
                <button onClick={handleSearch} disabled={!searchText}>Search</button>
            </div>
        </nav>
    )
}


