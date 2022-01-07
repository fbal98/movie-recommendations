//imports
import React from "react";

//styles
import "../App.css";
import "./Button.css";

/*
 *Button component takes the following props
 *width; to specify the width of the button
 *title; to specify the title or value of the button
 *handleClick; is function to be called whenever the component is clicked
 */

export default function Button(props) {
  if (props.title == null) {
    return <></>;
  }
  return (
    <a
      style={{ width: props.width }}
      className="container"
      onClick={props.handleClick}
    >
      {props.title}
    </a>
  );
}
