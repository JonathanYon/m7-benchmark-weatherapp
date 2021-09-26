import { initialState } from "../store";
import { GET_WEATHER, SET_ERROR, SET_LOADING } from "../action";

const weatherReducer = (state = initialState.weather, action) => {
  switch (action.type) {
    case GET_WEATHER:
      return {
        ...state,
        detail: [action.payload],
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};
export default weatherReducer;
