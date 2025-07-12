import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import SearchIcon from "@mui/icons-material/Search";
import Avatar from "@mui/material/Avatar";

import "./Movies.css";

const API_URL = " http://www.omdbapi.com/?i=tt3896198&apikey=3ad48b8f";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&S=${title}`);
    const data = await response.json();

    setMovies(data.Search);
    console.log(movies);
  };

  useEffect(() => {
    searchMovies("all");
  }, []);

  return (
    <div className="movies">
      <div className="header">
        <h1>MovieLand</h1>
        <div className="Searchbar">
          <span className="login">
            <h3>LogIn</h3>
            <Avatar />
          </span>

          <span className="searchArea">
            <SearchIcon onClick={() => searchMovies(searchTerm)} />
            <input
              value={searchTerm}
              placeholder="Search a Movie"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </span>
        </div>
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies found</h2>
        </div>
      )}
    </div>
  );
};

export default Movies;
