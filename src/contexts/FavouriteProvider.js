import { createContext, useState } from "react";
export const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    const addRemoveFavorite = (movie) => {
        favorites.includes(movie)
            ? setFavorites(favorites.filter((value) => value.id !== movie.id))
            : setFavorites([...favorites, movie]);
    };

    return (
        <FavoriteContext.Provider value={{ favorites, addRemoveFavorite }}>
            {children}
        </FavoriteContext.Provider>
    );
};