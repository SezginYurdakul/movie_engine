import React from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
    const navigate = useNavigate();
    let img_path = "https://image.tmdb.org/t/p/w500";

    return (
        <>
            <div onClick={() => navigate(`/movie/${movie.id}`)} className="movie">
                <img src={img_path + movie.poster_path} className="poster" alt={movie.title}></img>
                <div className="movie-details">
                    <div className="box">
                        <h4 className="title">{movie.title}</h4>
                        <p className="rating">{movie.vote_average}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MovieCard;