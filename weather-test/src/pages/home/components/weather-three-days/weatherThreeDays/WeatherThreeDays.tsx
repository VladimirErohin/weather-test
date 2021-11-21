import React from 'react';
import c from './WeatherThreeDays.module.scss';
import CardDay from "../card-day/CardDay";

type DaysforecastRes = {
    daysWeather:any
    numberDay:number
    title: string
}

const WeatherThreeDays = (props:DaysforecastRes) => {

    let daysWeatherData = props.daysWeather['daily'].slice(0, props.numberDay);

    let cardElement=daysWeatherData.map((item: any)=>
        <CardDay
            key={item.dt}
            dayItem={item}/>
    )
    return (
        <div className={c.weather}>
            <h2>{props.title}</h2>
            <div className={c.cards}>
                {cardElement}
            </div>
        </div>

    );
};

export default WeatherThreeDays;