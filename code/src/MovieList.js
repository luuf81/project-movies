import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const MovieList = () => {
  const [movies, setMovies] = useState([]);

  const API_URL =
    "https://api.themoviedb.org/3/movie/popular?api_key=a00dc273fb1eaa2bb4a4e6fed9fe4289&language=en-US&page=1";

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, []);

  return (
    <section className="movie-list">
      {movies.map((movie) => (
        <Link key={movie.id} className="list-link" to={`/movies/${movie.id}`}>
          <img
            className="list-image "
            src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
            alt={movie.title}
          />
          <div className="list-text">
            <h1>{movie.title}</h1>
            <p>Released: {movie.release_date}</p>
          </div>
        </Link>
      ))}
    </section>
  );
};
