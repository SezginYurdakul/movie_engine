import React, { useContext } from 'react'
import MovieCard from '../components/MovieCard';
import { MovieContext } from '../contexts/MovieProvider';

export default function SearchList() {
    const { movieResults, error, isLoading } = useContext(MovieContext);

    return (
        <>{isLoading ? (<h3 className="loading">Movies are Loading ...</h3>)
            : error ? (<h3 className="error">Something about API Link. Error : {error}</h3>)
                : (
                    <>
                        <div className='movie-list'>
                            {movieResults.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
                        </div>
                    </>
                )
        }
        </>
    )
}

