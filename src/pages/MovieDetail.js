import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function MovieDetail() {
    const { id } = useParams();
    const [movie, setMovie] = useState([]);

    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const API_key = "api_key=1b2e9155594c74034ae9f47ba073a1cd";
    const url = `https://api.themoviedb.org/3/movie/${id}?${API_key}`;

    useEffect(() => {
        const fetchDataMovieDetails = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setMovie(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };
        fetchDataMovieDetails();
    });

    return (

        <>{isLoading ? (<h3 className="loading" > Movie Details are Loading ...</h3>)
            : error ? (<h3 className="error">Something about API Link. Error : {error}</h3>)
                : (<>
                    <div className="detail-base">
                        <img
                            className="background-image"
                            src={`https://image.tmdb.org/t/p/w1280${movie?.backdrop_path}`}
                            alt={movie?.id}
                        />
                        <div className="movie-info-content">
                            <div className="detail-poster">
                                <img
                                    className="poster-image"
                                    src={`https://image.tmdb.org/t/p/w1280${movie?.poster_path}`}
                                    alt={movie?.id}
                                />
                            </div>
                            <div className="movie-info-text">
                                <h1>
                                    {movie?.title} <span>({movie?.release_date?.substring(0, 4)})</span>
                                </h1>
                                <div className="genres">
                                    {movie?.genres?.map((genre) => (
                                        <span key={genre.name}>{genre.name} </span>
                                    ))}
                                </div>
                                <h3>Overview</h3>
                                <p>{movie?.overview}</p>

                                <div className="rating-director">
                                    <div>
                                        <h3>IMDB Rating </h3>
                                        <div className="score">{movie?.vote_average?.toFixed(1)}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>)
        }
        </>);
}
