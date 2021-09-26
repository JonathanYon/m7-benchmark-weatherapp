import { initialState } from "../store";
import { TOGGLE_FAV } from "../action";

const favReducer = (state = initialState.favorite, action) => {
  switch (action.type) {
    case TOGGLE_FAV:
      return {
        ...state,
        cities: state.cities.includes(action.payload)
          ? state.cities
              .slice(0, state.cities.indexOf(action.payload))
              .concat(
                state.cities.slice(
                  state.cities.indexOf(action.payload) + 1,
                  state.cities.length
                )
              )
          : state.cities.concat(action.payload),
      };
    default:
      return state;
  }
};
export default favReducer;
