//imports
import React from "react";
import Movie from "./Movie";
import Button from "./Button";
import Genre from "./Genre";
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
  const list = props.list;

  if (list.type == "movies") {
    return (
      <div className="main">
        <div className="titelContainer">
          <h1>{props.title}</h1>
        </div>

        <div className="moviesContainer">
          {list.movies.map((m, index) => {
            return (
              <Movie
                className="movie"
                key={m.id}
                posterSrc={`https://image.tmdb.org/t/p/original/${m.poster_path}`}
                objectMetaData={true}
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
  } else if (list.type == "genres") {
    return (
      <div className="main">
        <div className="titelContainer">
          <h1>{props.title}</h1>
        </div>

        <div className="moviesContainer">
          {list.genres.map((g, index) => {
            return (
              <Genre
                className="movie"
                key={g.PostUri + index}
                posterSrc={g.PostUri}
                handleClick={() => {
                  props.genreClick(g.name);
                }}
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
}
