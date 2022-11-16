import React from "react";
import "./Picture.css";

const Picture = (props) => {
  return (
    <div className="picture">
      <img className="pic--img" src={props.img_url} alt="" />
      <h2 className="top-text">{props.topText}</h2>
      <h2 className="bottom-text">{props.bottomText}</h2>
    </div>
  );
};

export default Picture;
