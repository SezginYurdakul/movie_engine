import React, { useContext } from 'react'
import MovieCard from '../components/MovieCard';
import { MovieContext } from '../contexts/MovieProvider';

export default function SearchList() {
    const { movieResults } = useContext(MovieContext);


    return (
        <div className='movie-list'>
            {movieResults.map((movie) => <MovieCard key={movie.id} movie={movie} />)}

        </div>
    )
}
