import React, { useState, useEffect } from "react";
import "./App.css";
import Button from "./components/Button";
import Movie from "./components/Movie";
import MiddleContainer from "./components/MiddleContainer";
import GetRecommendations from "./utils/GetRecommendations";
import {
  getGenreList,
  getMoviesByGenre,
  getMovieKeywords,
  searchForMovie,
} from "./utils/MoviesAPI";
import { type } from "@testing-library/user-event/dist/type";

function App() {
  //hooks
  const [page, setPage] = useState(1);
  const [genreClicked, setgenreClicked] = useState([]);
  const [movies, setMovies] = useState([]);
  const [chosenMovie, setChosenMovie] = useState([]);
  const [recommended, setRecommended] = useState();
  const [chosen, setChosen] = useState(false);

  useEffect(() => {
    getMoviesByGenre(genreClicked).then((res) =>
      setMovies({ type: "movies", movies: res.results })
    );
  }, [genreClicked]);

  //event handling
  const handleNext = () => {
    setPage(page + 1);
  };
  const handleBack = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  const genreClick = (name) => {
    let genreId = () => {};
    setgenreClicked([...genreClicked, genreDict[name]]);
  };

  const onLike = (movie) => {
    //to return the title with the release year for better recommendation
    setChosenMovie([
      ...chosenMovie,
      movie.title + " " + movie.release_date.slice(-10, 4),
    ]);
  };

  if (page === 1) {
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
    if (movies.movies.length >= 1) {
      return (
        <div className="App">
          <MiddleContainer
            title="Choose the genre that you are most interested to watch"
            list={movies}
            buttonTitle="Next"
            onButtonClick={handleNext}
            onLike={onLike}
          />
        </div>
      );
    } else {
      return (
        <div className="App">
          <MiddleContainer
            title="Couldn't find any movies containing every genre you chose!"
            buttonTitle="Back"
            onButtonClick={handleBack}
          />
        </div>
      );
    }
  } else if (page === 3) {
    let content = null;
    if (recommended === undefined) {
      GetRecommendations(chosenMovie).then((res) => {
        setRecommended({
          type: "recommendations",
          value: res.data,
        });
      });
    }
    if (recommended) {
      content = (
        <div className="App">
          <MiddleContainer
            title="I recommend you to watch:"
            buttonTitle="Done"
            list={recommended}
            onButtonClick={handleBack}
          />
        </div>
      );
    } else {
      content = (
        <div className="App">
          <MiddleContainer
            title="hmmm let me think..."
            buttonTitle="Back"
            onButtonClick={handleBack}
          />
        </div>
      );
    }

    return content;
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

export default App;
