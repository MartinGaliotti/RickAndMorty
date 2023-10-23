import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Styles from "./Detail.module.css";

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  const renderOrigin = () => {
    if (character.origin !== undefined) {
      return <div className={Styles.origin}>ORIGIN: {character.origin}</div>;
    }
  };
  const renderName = () => {
    if (character.name !== undefined) {
      return <h1 className={Styles.name}>{character.name.toUpperCase()}</h1>;
    }
  };

  return (
    <div className={Styles.container}>
      <div className={Styles.textContainer}>
        {renderName()}
        <div className={Styles.status}>STATUS: {character.status}</div>
        <div className={Styles.gender}>GENDER: {character.gender}</div>
        <div className={Styles.specie}>SPECIE: {character.species}</div>
        {renderOrigin()}
      </div>
      <img className={Styles.img} src={character.image} alt={character.name} />
    </div>
  );
};

export default Detail;
