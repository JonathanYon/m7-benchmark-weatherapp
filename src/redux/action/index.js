export const GET_WEATHER = "GET_WEATHER";
export const SET_ERROR = "SET_ERROR";
export const SET_LOADING = "SET_LOADING";
export const TOGGLE_FAV = "TOGGLE_FAV";
export const GET_DAILY = "GET_DAILY";
export const DAILY_LOADER = "DAILY_LOADER";
export const DAILY_ERROR = "DAILY_ERROR";

export const cityWeatherAction = (query) => {
  return async (dispatch, getState) => {
    try {
      console.log("state", getState());
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=678b131125c510fd6d8c5158e03f8e33&units=metric` //const units = metric || imperial
      );
      if (response.ok) {
        const res = await response.json();
        dispatch({
          type: GET_WEATHER,
          payload: res,
        });
        dispatch({
          type: SET_LOADING,
          payload: false,
        });

        console.log("in 1 fetch", res.name);
      } else {
        console.log("error in 1 fetch");
        dispatch({
          type: SET_ERROR,
          payload: true,
        });
      }
    } catch (error) {
      console.log("catcha 1", error);
      dispatch({
        type: SET_ERROR,
        payload: true,
      });
    }
  };
};

export const cityInfoWeatherAction = (lat, lon) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=678b131125c510fd6d8c5158e03f8e33&units=metric` //const units = metric || imperial
      );
      if (response.ok) {
        const res = await response.json();
        dispatch({
          type: DAILY_LOADER,
          payload: false,
        });
        dispatch({
          type: GET_DAILY,
          payload: res,
        });

        console.log("hourly", res);
      } else {
        console.log("error in fetch 2");
        dispatch({
          type: DAILY_ERROR,
          payload: true,
        });
      }
    } catch (error) {
      console.log("2fetch", error);
      dispatch({
        type: DAILY_ERROR,
        payload: true,
      });
    }
  };
};

export const toggleFav = (data) => ({
  type: TOGGLE_FAV,
  payload: data,
});
