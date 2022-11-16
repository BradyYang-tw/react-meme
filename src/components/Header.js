import React from "react";
import troll from "../troll.jpeg";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="header-left">
        <img className="troll" src={troll} alt="" />
        <h2>Meme Generator</h2>
      </div>
      <h3>React Course - Project 3</h3>
    </header>
  );
};

export default Header;
