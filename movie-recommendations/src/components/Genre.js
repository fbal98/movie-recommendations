//imports
import React, { useState } from "react";
import { AiFillLike, AiOutlineLink, AiFillDislike } from "react-icons/ai";
//styles
import "../App.css";
import "./Movie.css";

/*
 *Movie component takes the following props
 *objectMetaData; an object containg all of the data about that movie
 *like; is a function to be called to handle the like
 *dislike; is a function to be called to handle the dislike
 *props.objectMetaData.link; is the link of that specific movie/ or alternatively another page in the website to show all details about it.
 */

export default function Genre(props) {
  const [chosen, setChosen] = useState(false);

  return (
    <div
      className={`MovieContainer ${chosen ? "chosen" : ""}`}
      onClick={() => {
        props.handleClick();
        setChosen(!chosen);
      }}
    >
      <img src={props.posterSrc} />
    </div>
  );
}
