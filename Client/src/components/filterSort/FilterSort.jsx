import Styles from "./FilterSort.module.css";
import consts from "../../Views/Favorites/consts";
import { useDispatch } from "react-redux";
import { filterCards, orderCards } from "../../redux/actions";
import { useEffect } from "react";

const FilterSort = (props) => {
  const dispatch = useDispatch();

  const { aux, setAux } = props;

  useEffect(() => {
    handleFilter({ target: { value: consts.Unfiltered } });
    handleOrder({ target: { value: consts.Ascendente } });
  }, []);

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    aux === true ? setAux(false) : setAux(true);
  };

  return (
    <div className={Styles.container}>
      <select onChange={handleOrder} className={Styles.order}>
        <option value={consts.Ascendente}>Upward</option>
        <option value={consts.Descendente}>Falling</option>
      </select>
      <select onChange={handleFilter} className={Styles.filter}>
        <option value={consts.Unfiltered}>Unfiltered</option>
        <option value={consts.Male}>Male</option>
        <option value={consts.Female}>Female</option>
        <option value={consts.Genderless}>Genderless</option>
        <option value={consts.Unknown}>Unknown</option>
      </select>
    </div>
  );
};

export default FilterSort;
