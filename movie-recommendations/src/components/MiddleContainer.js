//imports
import React from "react";
import Movie from "./Movie";
import Button from "./Button";

//styles
import "../App.css";
import "./MiddleContainer.css";

/**
 * Middle container compoenet
 * contains the following props:
 * moviesList, is list of movies to iterate
 * title, is the title to be displayed on top of the container
 * buttonTitle, is the text to be displayed on the button
 * onButtonClick, is function to be called when ever that button is clicked
 *
 *
 * Important ###
 * moviesList, is an array of object
 * each object should contain a uri for the poster
 * and a objectMetaData, which is basically the metadata that are fetched using the api.
 */

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
