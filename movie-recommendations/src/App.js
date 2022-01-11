import React, { useState, useEffect } from "react";
import "./App.css";
import Button from "./components/Button";
import Movie from "./components/Movie";
import MiddleContainer from "./components/MiddleContainer";

import {
  getGenreList,
  getMoviesByGenre,
  getMovieKeywords,
  searchForMovie,
} from "./utils/MoviesAPI";
import { type } from "@testing-library/user-event/dist/type";

const genreDict = {
  Action: 28,
  Adventure: 12,
  Animation: 16,
  Comedy: 35,
  Crime: 80,
  Documentary: 99,
  Drama: 18,
  Fantasy: 14,
  Horror: 27,
  Mystery: 9648,
  Romance: 10749,
  ScienceFiction: 878,
  Thriller: 53,
  War: 10752,
};

function App() {
  //hooks
  const [page, setPage] = useState(1);
  const [genreClicked, setgenreClicked] = useState([]);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getMoviesByGenre(genreClicked).then((res) =>
      setMovies({ type: "movies", movies: res.results })
    );
  }, [genreClicked]);
  //event handling
  const handleNext = () => {
    setPage(page + 1);
  };
  const genreClick = (name) => {
    let genreId = () => {};
    setgenreClicked([...genreClicked, genreDict[name]]);
  };

  if (page === 1) {
    console.log(genreClicked);
    return (
      <div className="App">
        <MiddleContainer
          title="Choose the genre that you are most interested to watch"
          list={genresObject}
          buttonTitle="Next"
          onButtonClick={handleNext}
          genreClick={genreClick}
        />
      </div>
    );
  } else if (page === 2) {
    return (
      <div className="App">
        <MiddleContainer
          title="Choose the genre that you are most interested to watch"
          list={movies}
          buttonTitle="Next"
          onButtonClick={handleNext}
          genreClick={genreClick}
        />
      </div>
    );
  }
}

const genresObject = {
  type: "genres",
  genres: [
    {
      name: "Action",
      PostUri: require("./assests/imgs/genres/action.png"),
      objectMetaData: !null,
    },
    {
      name: "Adventure",
      PostUri: require("./assests/imgs/genres/adventure.png"),
      objectMetaData: !null,
    },
    {
      name: "Animation",
      PostUri: require("./assests/imgs/genres/Animation.png"),
      objectMetaData: !null,
    },
    {
      name: "Comedy",
      PostUri: require("./assests/imgs/genres/Comedy.png"),
      objectMetaData: !null,
    },
    {
      name: "Crime",
      PostUri: require("./assests/imgs/genres/Crime.png"),
      objectMetaData: !null,
    },
    {
      name: "Documentary",
      PostUri: require("./assests/imgs/genres/Documentary.png"),
      objectMetaData: !null,
    },
    {
      name: "Drama",
      PostUri: require("./assests/imgs/genres/drama.png"),
      objectMetaData: !null,
    },
    {
      name: "Fantasy",
      PostUri: require("./assests/imgs/genres/Fantasy.png"),
      objectMetaData: !null,
    },
    {
      name: "Horror",
      PostUri: require("./assests/imgs/genres/Horror.png"),
      objectMetaData: !null,
    },
    {
      name: "Mystery",
      PostUri: require("./assests/imgs/genres/Mystery.png"),
      objectMetaData: !null,
    },
    {
      name: "Romance",
      PostUri: require("./assests/imgs/genres/Romance.png"),
      objectMetaData: !null,
    },
    {
      name: "ScienceFiction",
      PostUri: require("./assests/imgs/genres/ScienceFiction.png"),
      objectMetaData: !null,
    },
    {
      name: "Thriller",
      PostUri: require("./assests/imgs/genres/Thriller.png"),
      objectMetaData: !null,
    },
    {
      name: "War",
      PostUri: require("./assests/imgs/genres/War.png"),
      objectMetaData: !null,
    },
  ],
};
export default App;
