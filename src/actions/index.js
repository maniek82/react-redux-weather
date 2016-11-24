import axios from 'axios';
const API_KEY = '3232e3b7608ff006ca936191ed60ce2e';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&units=metric`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city}`;
    const request = axios.get(url);
   
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}