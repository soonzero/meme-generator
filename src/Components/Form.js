import React from "react";

export default function Form() {
  return (
    <form className="form">
      <div>
        <input className="form--top" placeholder="Top text" />
        <input className="form--bottom" placeholder="Bottom text" />
      </div>
      <button className="form--button">Get a new meme image 🖼</button>
    </form>
  );
}
