import Style from "./SearchBar.module.css";
import React from "react";
import { useState } from "react";

const random = () => {
  return Math.round(826 * Math.random());
};

export default function SearchBar(props) {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };

  const handleClick = (value) => {
    props.onSearch(value);
    setId("");
  };

  return (
    <div className={Style.container}>
      <input
        value={id}
        placeholder="Enter ID 🐑"
        onChange={handleChange}
        className={Style.input}
        type="search"
      />
      <div className={Style.buttonContainer}>
        <button className={Style.buttonAdd} onClick={() => handleClick(id)}>
          ADD
        </button>
        <button
          className={Style.buttonRandom}
          onClick={() => handleClick(random())}
        >
          ADD RANDOM
        </button>
      </div>
    </div>
  );
}
