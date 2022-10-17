import React from 'react'
import { useContext } from 'react';
import Movie from '../components/MovieCard';
import { MovieContext } from '../contexts/MovieProvider';

export default function MovieList() {

  const { movies, page, setPage, error, isLoading } = useContext(MovieContext);

  return (

    <>{isLoading ? (<h3 className="loading">Movies are Loading ...</h3>)
      : error ? (<h3 className="error">Something about API Link. Error : {error}</h3>)
        : (<>
          <div className='movie-list'>
            {movies.map((movie) => { return (<Movie key={movie.id} movie={movie} />) })}
          </div>
          <div className='page-buttons'>
            {(page > 1) && <button onClick={() => { setPage(page - 1) }}>Previus</button>}
            <button onClick={() => { setPage(page + 1) }}>Next</button>
          </div>
        </>)
    }
    </>
  )
}




