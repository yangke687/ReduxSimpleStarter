import axios from 'axios';

const API_KEY = '6a43408edafeadd664c7f1fffc7abf90';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`;
	// return promise 
	const request = axios.get(url);

	// return promise as a action payload
	return {
		type: FETCH_WEATHER,
		// redux-promise will catch the payload (if payload is a promise, stop it)
		// (if the payload isn't a promise, let it go)
		// and until the promise resolves before hitting reducers
		// this is what middleware does
		payload: request
	};
}