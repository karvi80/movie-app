import React from "react";
import "./Movie.css";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie">
      <img
        className="poster"
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/400"
        }
        alt={movie.Title}
      />

      <div className="type-title">
        <span>
          {movie.Type} - Year {movie.Year}
        </span>
        <p>{movie.Title}</p>
      </div>
    </div>
  );
};

export default MovieCard;
