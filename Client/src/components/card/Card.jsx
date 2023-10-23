import Styles from "./Card.module.css";
import { NavLink, useLocation } from "react-router-dom";
import pathName from "../../Helpers/PATHNAME.routes";
import { addFav, removeFav } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";

export default function Card(props) {
  const { id, name, image, status, species, gender, origin, onClose } = props;
  const favorites = useSelector((state) => state.allCharacter);
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(removeFav(id));
    } else {
      setIsFav(true);
      dispatch(addFav(props));
    }
  };

  useEffect(() => {
    favorites.forEach((fav) => {
      if (Number(fav.id) === Number(id)) {
        setIsFav(true);
      }
    });
  }, [favorites]);

  const renderButton = () => {
    if (pathname !== pathName.FAVORITE) {
      if (isFav) {
        return (
          <button onClick={handleFavorite} className={Styles.fav}>
            ❤️
          </button>
        );
      } else {
        return (
          <button onClick={handleFavorite} className={Styles.fav}>
            🤍
          </button>
        );
      }
    }
  };

  return (
    <div className={Styles.container}>
      <div className={Styles.buttonContainer}>
        <button className={Styles.close} onClick={() => onClose(id)}>
          X
        </button>
        {renderButton()}
      </div>
      <NavLink to={`${pathName.DETAIL}/${id}`}>
        <h2 className={Styles.name}>
          <center>{name}</center>
        </h2>
      </NavLink>
      <img className={Styles.image} src={image} alt="Image" />
      <h2 className={Styles.status}>{status}</h2>
      <h2 className={Styles.species}>{species}</h2>
      <h2 className={Styles.gender}>{gender}</h2>
      <h2 className={Styles.origin}>{origin}</h2>
    </div>
  );
}
