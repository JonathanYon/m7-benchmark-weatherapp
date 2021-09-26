import { initialState } from "../store";
import { DAILY_ERROR, DAILY_LOADER, GET_DAILY } from "../action";

export const dailyReducer = (state = initialState.timelyInfo, action) => {
  switch (action.type) {
    case GET_DAILY:
      return {
        ...state,
        daily: [action.payload],
      };
    case DAILY_LOADER:
      return {
        ...state,
        loading: action.payload,
      };
    case DAILY_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default dailyReducer;
