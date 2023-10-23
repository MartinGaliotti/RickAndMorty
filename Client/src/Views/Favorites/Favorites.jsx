import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import Styles from "./Favorites.module.css";
import Card from "../../components/card/Card";
import { filterCards, removeFav } from "../../redux/actions";
import FilterSort from "../../components/filterSort/FilterSort";

const Favorite = () => {
  const favorites = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();
  const [aux, setAux] = useState(false);

  function removeFavorite(id) {
    dispatch(removeFav(id));
  }

  return (
    <div className={Styles.container}>
      <FilterSort aux={aux} setAux={setAux} />
      <div className={Styles.cardContainer}>
        {favorites.map((character, key) => (
          <Card
            key={key}
            id={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin}
            image={character.image}
            onClose={() => removeFavorite(character.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Favorite;
