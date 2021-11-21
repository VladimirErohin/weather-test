import React from 'react';
import HourlyWeather from "../hourly-weather/HourlyWeather";
import hl from "./HourlyWeatherList.module.scss";
import WeatherThreeDays from "../../../home/components/weather-three-days/weatherThreeDays/WeatherThreeDays";
import SearchCity from "./serch-city/SearchCity";

type Hourly = {
    statistics: any
    city: string
    onChangeCIty: (city: string) => void
};

const HourlyWeatherList = (props: Hourly) => {

    const dateF = new Date(props.statistics['current']['dt'] * 1000);
    type optionsData = {
        weekday: string,
        year: string,
        month: string,
        day: string
    }
    const optionsS: any = {weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric'};
    const dateToday = new Intl.DateTimeFormat('en-GB', optionsS).format(dateF);

    const hourlyDay= props.statistics.hourly.slice(0, 24);

    const elHourly = hourlyDay.map((h: any) =>
        <HourlyWeather
            key={h.dt}
            h={h}
        />
    );
    return (
        <div className={hl.hourly__weather__list}>
            <div className={hl.city}>{props.city} <span className={hl.today}>{dateToday}</span></div>
            <div className={hl.hourly__list}>{elHourly}</div>
            <WeatherThreeDays daysWeather={props.statistics} numberDay={10} title={'Weather for 8 days'}/>
            <SearchCity onChangeCIty={props.onChangeCIty}/>
        </div>
    );
};

export default HourlyWeatherList;