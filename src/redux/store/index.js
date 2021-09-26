import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import favReducer from "../reducer/favorite";
import weatherReducer from "../reducer/weather";
import dailyReducer from "../reducer/timelyInfo";

export const initialState = {
  weather: {
    detail: [],
    error: false,
    loading: true,
  },
  timelyInfo: {
    daily: [],
    error: false,
    loading: true,
  },
  favorite: {
    cities: [],
  },
};
const rootReducer = combineReducers({
  weather: weatherReducer,
  favorite: favReducer,
  timelyInfo: dailyReducer,
});

const configStore = createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(thunk))
    : compose(applyMiddleware(thunk))
);
export default configStore;
