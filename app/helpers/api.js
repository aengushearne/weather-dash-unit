import axios from 'axios';
import appid from '../config';
//http://api.openweathermap.org/data/2.5/weather?lat=43&lon=-75&units=metric&
const url = 'http://api.openweathermap.org/data/2.5';

// http://api.openweathermap.org/data/2.5/weather?q=CITY-NAME&type=accurate&APPID=YOUR-API-KEY

function getWeather(city){
    return axios.get(url+'/weather?q='+city+'&type=accurate&units=metric&APPID='+appid)
    .then(function(weather){
			return weather.data;
		});;
}
function getForecast(city){
    return axios.get(url+'/forecast/daily?q='+city+'&cnt=5&type=accurate&units=metric&APPID='+appid)
    .then(function(weather){
			return weather.data;
		});;
}

module.exports = {
    weather: getWeather,
    forecast: getForecast
};