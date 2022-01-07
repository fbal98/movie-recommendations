import React from "react";
import Movie from "./Movie";
import Button from "./Button";

//styles
import "../App.css";
import "./MiddleContainer.css";

export default function MiddleContainer(props) {
  const movies = props.moviesList;
  return (
    <div className="main">
      <div className="titelContainer">
        <h1>{props.title}</h1>
      </div>

      <div className="moviesContainer">
        {movies.map((m, index) => {
          return (
            <Movie
              className="movie"
              key={m.PostUri + index}
              posterSrc={m.PostUri}
              objectMetaData={m.objectMetaData}
            />
          );
        })}
      </div>
      <div className="buttonContainer">
        <Button
          title={props.buttonTitle}
          handleClick={props.onButtonClick}
          width={200}
        />
      </div>
    </div>
  );
}
