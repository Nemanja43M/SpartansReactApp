import React from "react";
import style from "./MovieCard.module.css";
import { withRouter } from "react-router-dom";
function MovieCard({ movie, history }) {
  const getMovieDetails = (imdbID) => {
    // eslint-disable-next-line no-restricted-globals

    history.push("details?imdbID=" + imdbID);
  };
  return (
    <div
      className={style.container}
      onClick={() => getMovieDetails(movie.imdbID)}
    >
      <img src={movie.Poster} alt="Poster" />
      <p>{movie.Title}</p>
      <p>{movie.Year}</p>
    </div>
  );
}
export default withRouter(MovieCard);
