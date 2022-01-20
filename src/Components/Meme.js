import React from "react";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((data) => setAllMemeImages(data.data.memes));
  }, []);

  /* 
  React.useEffect(() => {
    async function getMemes() {
      const resonse = await fetch("https://api.imgflip.com/get_memes")
      const data = await response.json()
      setAllMemes(data.data.memes)
    }
    getMeme()
    }, [])

  */

  function onClick() {
    const randomNumber = Math.floor(Math.random() * allMemeImages.length);
    const url = allMemeImages[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <main>
      <div className="form">
        <input
          type="text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
          className="form--top"
          placeholder="Top text"
        />
        <input
          type="text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
          className="form--bottom"
          placeholder="Bottom text"
        />
        <button className="form--button" onClick={onClick}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
