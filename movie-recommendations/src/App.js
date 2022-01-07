import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Movie from "./components/Movie";
import MiddleContainer from "./components/MiddleContainer";

function App() {
  const movies = [
    {
      PostUri:
        "https://www.gamespot.com/a/uploads/original/1562/15626911/3776884-image%285%29.png",

      objectMetaData: !null,
    },
    {
      PostUri:
        "https://m.media-amazon.com/images/M/MV5BODE0MzZhZTgtYzkwYi00YmI5LThlZWYtOWRmNWE5ODk0NzMxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
      objectMetaData: !null,
    },
    {
      PostUri:
        "https://m.media-amazon.com/images/M/MV5BODE0MzZhZTgtYzkwYi00YmI5LThlZWYtOWRmNWE5ODk0NzMxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
      objectMetaData: !null,
    },
    {
      PostUri:
        "https://www.gamespot.com/a/uploads/original/1562/15626911/3776884-image%285%29.png",

      objectMetaData: !null,
    },
    {
      PostUri:
        "https://m.media-amazon.com/images/M/MV5BODE0MzZhZTgtYzkwYi00YmI5LThlZWYtOWRmNWE5ODk0NzMxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
      objectMetaData: !null,
    },
    {
      PostUri:
        "https://m.media-amazon.com/images/M/MV5BODE0MzZhZTgtYzkwYi00YmI5LThlZWYtOWRmNWE5ODk0NzMxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
      objectMetaData: !null,
    },
    {
      PostUri:
        "https://www.gamespot.com/a/uploads/original/1562/15626911/3776884-image%285%29.png",

      objectMetaData: !null,
    },
    {
      PostUri:
        "https://www.gamespot.com/a/uploads/original/1562/15626911/3776884-image%285%29.png",

      objectMetaData: !null,
    },
    {
      PostUri:
        "https://m.media-amazon.com/images/M/MV5BODE0MzZhZTgtYzkwYi00YmI5LThlZWYtOWRmNWE5ODk0NzMxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
      objectMetaData: !null,
    },
    {
      PostUri:
        "https://m.media-amazon.com/images/M/MV5BODE0MzZhZTgtYzkwYi00YmI5LThlZWYtOWRmNWE5ODk0NzMxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
      objectMetaData: !null,
    },
    {
      PostUri:
        "https://www.gamespot.com/a/uploads/original/1562/15626911/3776884-image%285%29.png",

      objectMetaData: !null,
    },
    {
      PostUri:
        "https://m.media-amazon.com/images/M/MV5BODE0MzZhZTgtYzkwYi00YmI5LThlZWYtOWRmNWE5ODk0NzMxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
      objectMetaData: !null,
    },
    {
      PostUri:
        "https://m.media-amazon.com/images/M/MV5BODE0MzZhZTgtYzkwYi00YmI5LThlZWYtOWRmNWE5ODk0NzMxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
      objectMetaData: !null,
    },
    {
      PostUri:
        "https://www.gamespot.com/a/uploads/original/1562/15626911/3776884-image%285%29.png",

      objectMetaData: !null,
    },
    {
      PostUri:
        "https://www.gamespot.com/a/uploads/original/1562/15626911/3776884-image%285%29.png",

      objectMetaData: !null,
    },
    {
      PostUri:
        "https://m.media-amazon.com/images/M/MV5BODE0MzZhZTgtYzkwYi00YmI5LThlZWYtOWRmNWE5ODk0NzMxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
      objectMetaData: !null,
    },
    {
      PostUri:
        "https://m.media-amazon.com/images/M/MV5BODE0MzZhZTgtYzkwYi00YmI5LThlZWYtOWRmNWE5ODk0NzMxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
      objectMetaData: !null,
    },
    {
      PostUri:
        "https://www.gamespot.com/a/uploads/original/1562/15626911/3776884-image%285%29.png",

      objectMetaData: !null,
    },
  ];

  const [page, setPage] = useState(1);

  const handleNext = () => {
    setPage(page + 1);
  };

  if (page === 1) {
    return (
      <div className="App">
        <MiddleContainer
          title="Choose the genre that you are most interested to watch"
          moviesList={movies}
          buttonTitle="Next"
          onButtonClick={handleNext}
        />
      </div>
    );
  } else if (page === 2) {
    return (
      <div className="App">
        <MiddleContainer
          title="Choose a couple of movies that you liked before"
          moviesList={movies}
          buttonTitle="Next"
          onButtonClick={handleNext}
        />
      </div>
    );
  } else if (page === 3) {
    return (
      <div className="App">
        <MiddleContainer
          title="Choose a couple of movies that you liked before"
          moviesList={movies}
          buttonTitle="Next"
          onButtonClick={handleNext}
        />
      </div>
    );
  } else if (page === 4) {
    return (
      <div className="App">
        <MiddleContainer title="More of What You Like" moviesList={movies} />
      </div>
    );
  }
}

export default App;
