import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import heartSolid from "../assets/heart-solid.svg";
import heartRegular from "../assets/heart-regular.svg";
import { FavoriteContext } from "../contexts/FavouriteProvider";

const MovieCard = ({ movie }) => {
    const navigate = useNavigate();
    let img_path = "https://image.tmdb.org/t/p/w500";
    const { favorites, addRemoveFavorite } = useContext(FavoriteContext);
    const isFavorite = favorites.includes(movie);
    const handleFavorite = () => { addRemoveFavorite(movie); };

    return (
        <>
            <div className="movie-card">
                <label className="rating">{movie.vote_average}</label>
                <div onClick={() => navigate(`/movie/${movie.id}`)}>
                    <img
                        src={img_path + movie.poster_path}
                        className="poster"
                        alt={movie.title}
                    ></img>
                    <div className="movie-details">
                        <div className="box">
                            <h3 className="title">{movie.title}</h3>
                            <p className="production-date">{movie.release_date}</p>
                        </div>
                    </div>
                </div>
                <div className="like-button">
                    <img
                        src={isFavorite ? heartSolid : heartRegular}
                        onClick={handleFavorite}
                        alt="fav"
                    />
                </div>
            </div>
        </>
    );
};
export default MovieCard;
