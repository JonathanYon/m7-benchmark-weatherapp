import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import favReducer from "../reducer/favorite";
import weatherReducer from "../reducer/weather";

export const initialState = {
  weather: {
    datail: [],
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
});

const configStore = createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE_(applyMiddleware(thunk))
    : compose(applyMiddleware(thunk))
);
