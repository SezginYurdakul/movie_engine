import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


export default function MovieDetail() {
    const { id } = useParams()
    const [movie, setMovie] = useState([]);
    const API_key = "api_key=1b2e9155594c74034ae9f47ba073a1cd";

    const url = `https://api.themoviedb.org/3/movie/${id}?${API_key}`;
    useEffect(() => {
        const fetchDataMovieDetails = async () => {
            try {

                const response = await fetch(url);
                const data = await response.json();
                setMovie(data);
            } catch (error) {
                // setError(error.message);
            }
        }
        fetchDataMovieDetails();


    }, [])

    const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/';
    const BACKDROP_SIZE = 'w1280';

    return (
        <div>
            <div className="movieinfo-content">
                <div className="movieinfo-thumb">
                    <img
                        src={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie?.backdrop_path}`
                        }
                        alt={movie?.id}


                    />
                </div>
                <div className="movieinfo-text">
                    <h1>{movie?.title}</h1>
                    <h3>PLOT</h3>
                    <p>{movie?.overview}</p>

                    <div className="rating-director">
                        <div>
                            <h3>IMDB RATING</h3>
                            <div className="score">{movie?.vote_average}</div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
