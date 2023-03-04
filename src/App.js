import Header from "./components/Header";
import Home from "./components/Home";
import style from "./App.module.css";
import MovieList from "./components/MovieList";
// import MovieCard from "./MovieCard";
import { Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState();

  return (
    <div className={style.App}>
      <Header setSearch={setSearch} />
      <Route path="/" exact={true} component={Home}></Route>
      <div className="container">
        <Route
          path="/movies"
          render={() => <MovieList search={search} />}
        ></Route>
      </div>
    </div>
  );
}

export default App;
