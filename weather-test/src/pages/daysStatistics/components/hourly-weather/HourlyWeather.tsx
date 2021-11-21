import React from 'react';
import h from './HourlyWeather.module.scss';

type HourlyDataProps={
    h: any
}


const HourlyWeather = (props:HourlyDataProps) => {
    const dateF = new Date(props.h.dt * 1000);
    const options: any = {
        hour: 'numeric',
        minute: 'numeric'
    };
    const date = new Intl.DateTimeFormat('en-GB', options).format(dateF);
    const kelvinToCel = (t: number) => {return Math.floor(t - 273)};

    return (
        <div className={h.hourly__weather}>
            <div className={h.data}>{date}</div>
            <div className={h.temp}>{kelvinToCel(props.h.temp)}°C</div>
        </div>
    );
};

export default HourlyWeather;