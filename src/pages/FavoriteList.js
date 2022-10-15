import React, { useContext } from 'react'
import MovieCard from '../components/MovieCard'
import { FavoriteContext } from '../contexts/FavouriteProvider'

export default function FavoriteList() {
    const { favorites } = useContext(FavoriteContext)
    return (
        <div className='movie-list'>
            {favorites.map((movie) => <MovieCard key={movie.id} movie={movie} />)}

        </div>
    )
}
