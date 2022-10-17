import React, { useContext } from "react";
import MovieCard from "../components/MovieCard";
import { FavoriteContext } from "../contexts/FavouriteProvider";

export default function FavoriteList() {
    const { favorites } = useContext(FavoriteContext);
    return (
        <>
            {favorites.length === 0 ? (
                <h1 className="empty-favList">Your List is Empty</h1>
            ) : (
                <>
                    <div className="movie-list">
                        {favorites.map((movie) => (
                            <MovieCard key={movie.id} movie={movie} />
                        ))}
                    </div>
                </>
            )}
        </>
    );
}
