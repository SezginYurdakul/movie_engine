import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { MovieContext } from '../../contexts/MovieProvider';
import './Navbar.css';

export default function Navbar() {
    const { setCategory, searchMovies } = useContext(MovieContext);
    const [inputText, setInputText] = useState("");
    const navigate = useNavigate();

    const handleClick = (e) => { setCategory(e.target.id); navigate('/') }
    const handleSearch = () => { searchMovies(inputText); navigate('/searchList') }


    return (
        <nav className="navbar">
            <div onClick={() => { setCategory('top_rated'); navigate('/') }} className="logo">MOVIE ENGINE</div>
            <ul className="nav-links">
                <div className="menu">
                    <li id="top_rated" onClick={handleClick}> TOP RATED </li>
                    <li id="now_playing" onClick={handleClick}>NOW PLAYING</li>
                    <li id="popular" onClick={handleClick}>POPULAR</li>
                    <li id="upcoming" onClick={handleClick}> UPCOMING</li>
                    <li onClick={() => navigate('/favorites')}> WATCH LATER</li>
                    <input id="searchText" className="menu" type="search" placeholder=" Search" value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                    />
                    <button onClick={() => { inputText !== "" ? handleSearch() : alert('Enter some search text please !!') }} id="searchButton" className="menu" >Search</button>

                </div>
            </ul>
        </nav>
    )
}




