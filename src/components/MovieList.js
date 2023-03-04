/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";

import MovieCard from "./MovieCard";
import axios from "axios";
import { useState, useEffect } from "react";
import queryString from "query-string";
import style from "./MovieList.module.css";
import Pagination from "./Pagination";

function MovieList(props) {
  const [movies, setMovies] = useState([]);

  function fetchMovie(params) {
    axios
      .get(`https://www.omdbapi.com/?i=tt3896198&apikey=28101efb&s=${params}`)
      .then((resp) => resp.data)
      .then((data) => data.Search)
      .then((movies) => setMovies(movies));
  }
  const [currentPage, setCurrentPage] = useState(1);
  const [movieParPage, setMovieParPage] = useState(3);

  const lastPostIndex = currentPage * movieParPage;
  const firstPostIndex = lastPostIndex - movieParPage;
  const currentMovie = movies.slice(firstPostIndex, lastPostIndex);
  console.log(setMovieParPage);

  useEffect(() => {
    let q = queryString.parse(props.searchText);

    console.log(q);
    fetchMovie(q.searchText);
  }, []);
  useEffect(() => {
    fetchMovie(props.search);
  }, [props.search]);
  return (
    <div className={style.box}>
      {currentMovie.map((m) => (
        <MovieCard movie={m} key={m.imdbID} />
      ))}
      <Pagination
        totalMovie={currentMovie.length}
        movieParPage={movieParPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
}
export default MovieList;
