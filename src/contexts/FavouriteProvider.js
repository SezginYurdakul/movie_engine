import { createContext, useState } from "react";
export const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    const changeFavorite = (movie) => {
        favorites.includes(movie)
            ? setFavorites(favorites.filter((value) => value.id !== movie.id))
            : setFavorites([...favorites, movie]);
    };

    return (
        <FavoriteContext.Provider value={{ favorites, changeFavorite }}>
            {children}
        </FavoriteContext.Provider>
    );
};