import React from 'react'
import { useContext } from 'react';
import Movie from '../components/MovieCard';
import { MovieContext } from '../contexts/MovieProvider';

export default function MovieList() {

  const { movies, page, setPage } = useContext(MovieContext);

  return (
    <>
      <div className='movie-list'>
        {movies.map((movie) => { return (<Movie key={movie.id} movie={movie} />) }
        )}

      </div>
      <div className='page-buttons'>
        {(page > 1) && <button onClick={() => { setPage(page - 1) }}>Previus</button>}
        <button onClick={() => { setPage(page + 1) }}>Next</button>
      </div>
    </>
  )
}


