import React, { useEffect, useState } from "react";
import Picture from "./Picture";
import "./Form.css";
import data from "../data";

const Form = () => {
  // const [img, setImg] = useState("https://i.imgflip.com/30b1gx.jpg");
  // const [topText, setTopText] = useState("");
  // const [bottomText, setBottomText] = useState("");

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    img: "https://i.imgflip.com/30b1gx.jpg",
  });

  const [allMemes, setAllMemes] = useState({});
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson.data.memes.length);
        setAllMemes(myJson);
      });
  }, []);

  const handleClick = () => {
    let index = (Math.random(1) * allMemes.data.memes.length).toFixed(0);
    console.log(index);
    setMeme((preMeme) => {
      return { ...preMeme, img: allMemes.data.memes[index].url };
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    setMeme((preMeme) => {
      // console.log();
      let a = event.target.name;
      return { ...preMeme, [a]: event.target.value };
    });
  };
  return (
    <section className="section">
      <form onSubmit={handleSubmit}>
        <input
          name="topText"
          className="finput"
          type="text"
          placeholder="Top text"
          onChange={handleChange}
        />
        <input
          name="bottomText"
          className="sinput"
          type="text"
          placeholder="Bottom text"
          onChange={handleChange}
        />
        <button onClick={handleClick}>Get a new meme image</button>
      </form>
      <Picture
        img_url={meme.img}
        topText={meme.topText}
        bottomText={meme.bottomText}
      ></Picture>
    </section>
  );
};

export default Form;
