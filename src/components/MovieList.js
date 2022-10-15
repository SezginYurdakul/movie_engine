import React from 'react'
import { useContext } from 'react';
import Movie from './MovieCard';
import { MovieContext } from './MovieProvider';

export default function MovieList() {

  const { movies } = useContext(MovieContext);

  return (
    <>
      {movies.map((movie) => { return (<Movie key={movie.id} movie={movie} />) }
      )}
    </>
  )
}


