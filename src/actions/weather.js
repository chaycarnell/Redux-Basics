// Import action type
import { FETCH_WEATHER } from "./actionTypes";
// Import some mock data for this example
import { weatherResponse } from "../mockData/weatherResponse";

export const fetchWeather = (city = "London") => {
  // API request would be done here
  const request = weatherResponse;
  return {
    type: FETCH_WEATHER,
    payload: request
  };
};
