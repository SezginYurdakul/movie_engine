import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";


export const MovieContext = createContext();
export const MovieProvider = ({ children }) => {
  
    const [movies, setMovies] = useState([]);
    const [category, setCategory] = useState("top_rated");
    const [error, setError] = useState("");
    const page = 1;
    const API_key = "api_key=1b2e9155594c74034ae9f47ba073a1cd";
    

    useEffect(() => {

        const url = `https://api.themoviedb.org/3/movie/${category}?${API_key}&language=en-US&page=${page}`;
        const fetchDataList = async () => {
            try {
                //if (category) {
                const response = await fetch(url);
                const { results } = await response.json();

                setMovies(results);
                //}
            } catch (error) {
                setError(error.message);
            }
        }
        fetchDataList();
    }, [category])





    const searchMovies = async (searchText) => {
        const url = `https://api.themoviedb.org/3/search/movie?api_key=1b2e9155594c74034ae9f47ba073a1cd&query=${searchText}`

        try {
            const response = await fetch(url);
            const { results } = await response.json();
            setMovies(results);
        } catch (error) {
            setError(error.message);
        }
    }

    



    return <MovieContext.Provider value={{ movies, setCategory, error, searchMovies }} >
        {children}
    </MovieContext.Provider>

}
