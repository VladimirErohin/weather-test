import React, {useEffect, useState} from 'react';
import CurrentDay from "./current-day/CurrentDay";
import WeatherThreeDays from "./weather-three-days/weatherThreeDays/WeatherThreeDays";
import CitySwitch from "./city-switch/CitySwitch";
import WeatherService from "../../../API/WeatherService";

const Home = () => {

    const[apiData, setApiData] = useState<any>();
    const [state, setState] = useState('Minsk');
    const [daysWeather, setDaysWeather] = useState<any>();

    const apiKey = '528488e7ee8f7a518a483627bfa61928';

    useEffect(() => {
        fetchWeather();
    }, [state]);

    async function fetchWeather() {
        const weather = await WeatherService.getWeatherData(state, apiKey);
        const coordLon: number = weather.coord.lon;
        const coordLat: number = weather.coord.lat;
        const forecastRes = await WeatherService.getWeatherForecast(coordLat, coordLon, apiKey);
        setApiData(weather);
        setDaysWeather(forecastRes);
        localStorage.setItem('weatherDate', JSON.stringify(forecastRes));
        localStorage.setItem('city', JSON.stringify(state));
    }

    function onChangeCity(city: string) {
        setState(city)
    }

    const weatherData = {...apiData}

    return (
        <div>
            {weatherData.main
                ? <CurrentDay weatherData={weatherData}/>
                : <h1> Loading... </h1>
            }
            {daysWeather
                ? <WeatherThreeDays daysWeather={daysWeather} numberDay={3} title={'Weather for 3 days'}/>
                : ''
            }
            <CitySwitch onChangeCity={onChangeCity}/>
        </div>
    );
};

export default Home;