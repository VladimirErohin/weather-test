import React, {useEffect, useState} from 'react';
import s from './DaysStatistics.module.scss';
import HourlyWeatherList from "../hourly-weathe-list/HourlyWeatherList";
import WeatherService from "../../../../API/WeatherService";

const DaysStatistics = () => {

    const [statistics, setStatistics] = useState<any>();
    const [city, setCity] = useState<any>('');

    const apiKey = '528488e7ee8f7a518a483627bfa61928';

    useEffect(() => {
        fetchData()
        fetchStatistics()
    }, [city]);

    async function fetchStatistics() {
        let weatherStatistics: any = localStorage.getItem('weatherDate');
        let statistics = JSON.parse(weatherStatistics);
        let weatherCity: any = localStorage.getItem('city');
        let cityData = JSON.parse(weatherCity);
        setCity(cityData);
        setStatistics(statistics);
    }

    async function fetchData() {
        const weather = await WeatherService.getWeatherData(city, apiKey);
        const coordLon: number = weather.coord.lon;
        const coordLat: number = weather.coord.lat;
        const forecastRes = await WeatherService.getWeatherForecast(coordLat, coordLon, apiKey);
        setStatistics(forecastRes)
    }

    function onChangeCIty(city: string) {
        setCity(city)
    }

    return (
        <div className={s.home}>
            {statistics
                ? <HourlyWeatherList statistics={statistics} city={city} onChangeCIty={onChangeCIty}/>
                : ''
            }
        </div>
    );
};

export default DaysStatistics;