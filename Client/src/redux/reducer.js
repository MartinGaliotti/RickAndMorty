import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions";
import consts from "../Views/Favorites/consts";

const initialState = {
  myFavorites: [],
  allCharacter: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: action.payload,
        allCharacter: action.payload,
      };
      break;
    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: action.payload,
        allCharacter: action.payload,
      };
      break;
    case FILTER:
      return {
        ...state,
        myFavorites: state.allCharacter.filter(
          (char) =>
            char.gender == action.payload ||
            action.payload === consts.Unfiltered
        ),
      };
      break;
    case ORDER:
      return {
        ...state,
        myFavorites: state.myFavorites.sort((a, b) =>
          action.payload === consts.Ascendente ? a.id - b.id : b.id - a.id
        ),
        allCharacter: state.allCharacter.sort((a, b) =>
          action.payload === consts.Ascendente ? a.id - b.id : b.id - a.id
        ),
      };
      break;
    default:
      return { ...state };
      break;
  }
};

export default rootReducer;
