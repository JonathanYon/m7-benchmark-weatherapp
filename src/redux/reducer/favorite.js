import { initialState } from "../store";
import { TOGGLE_FAV } from "../action";

const favReducer = (state = initialState.favorite, action) => {
  switch (action.type) {
    case TOGGLE_FAV:
      return {
        ...state,
        fav: state.cities.concat(action.payload),
      };
    default:
      return state;
  }
};
export default favReducer;
