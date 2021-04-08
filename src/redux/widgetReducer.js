import { widgetAPI } from "../api/api";

const SET_DATA = 'SET-DATA';

const initialState = {
  temp: undefined,
  feels_like: undefined,
  humidity: undefined,
  wind_speed: undefined
}

export const widgetReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        temp: action.data.temp,
        feels_like: action.data.feels_like,
        humidity: action.data.humidity,
        wind_speed: action.data.wind_speed
      }

    default:
      return state;
  }
}

const setData = (data) => {
  return { type: SET_DATA, data }
}

export const getDataThunk = (city) => async (dispatch) => {
  const response = await widgetAPI.getData(city)
  if (response.cod === 200) {
    const data = {
      temp: response.main.temp,
      feels_like: response.main.feels_like,
      humidity: response.main.humidity,
      wind_speed: response.wind.speed
    }
    dispatch(setData(data))
  }
}