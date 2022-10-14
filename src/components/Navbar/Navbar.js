import React, { useContext } from 'react'
import { useState } from 'react';
import { MovieContext } from '../MovieProvider';
import './Navbar.css';

export default function Navbar() {
    const { setCategory, searchMovies } = useContext(MovieContext);
    const [inputText, setInputText] = useState("");
    const handleClick = (e) => { setCategory(e.target.id); console.log(e.target.id) }
    const handleSearch = () => { searchMovies(inputText) }

    return (
        <nav className="navbar">
            <div className="logo">MOVIE ENGINE</div>
            <ul className="nav-links">
                <div className="menu">
                    <li id="top_rated" onClick={handleClick}> TOP RATED </li>
                    <li id="now_playing" onClick={handleClick}>NOW PLAYING</li>
                    <li id="popular" onClick={handleClick}>POPULAR</li>
                    <li id="upcoming" onClick={handleClick}> UPCOMING</li>
                    <li > WATCH LATER</li>
                    <input
                        id="searchText"
                        className="menu"
                        type="search"
                        placeholder=" Search"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                    />
                    <button onClick={handleSearch} id="searchButton" className="menu" >Search</button>

                </div>
            </ul>
        </nav>
    )
}




