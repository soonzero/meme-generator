import React from "react";
import memesData from "../memesData";

export default function Meme() {
  let url;
  const [memeImage, getMemeImage] = React.useState("");
  function onClick() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    url = memesArray[randomNumber].url;
    getMemeImage(url);
  }
  return (
    <main>
      <div className="form">
        <input className="form--top" placeholder="Top text" />
        <input className="form--bottom" placeholder="Bottom text" />
        <button className="form--button" onClick={onClick}>
          Get a new meme image 🖼
        </button>
      </div>
      <img src={memeImage} className="meme--image" />
    </main>
  );
}
