import React from 'react';
import d from './CurrentDay.module.scss';

type WeatherPropsType = {
    weatherData: any
}

const kelvinToCel = (t: number) => {
    return Math.floor(t - 273)
};
const CurrentDay = (props: WeatherPropsType) => {

    const dateF = new Date(props.weatherData.dt * 1000);
    const options: any = {weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric'};
    const date = new Intl.DateTimeFormat('en-GB', options).format(dateF);

    return (
        <div className={d.current__day}>
            <div className={d.current__day_data}>
                <div className={d.wrapper}>
                    <div className={d.wrapper__top}>
                        <img
                            src={`https://openweathermap.org/img/w/${props.weatherData.weather[0]['icon']}.png`}
                            alt="weather status icon"
                        />
                        <div className={d.day__temp}>{kelvinToCel(props.weatherData.main.temp)}</div>
                        <span className={d.cel}>°C</span>
                    </div>
                    <div className={d.info}>
                        <div className={d.current__description}>{props.weatherData.weather[0]['description']}</div>
                        <div className={d.current__city}>{props.weatherData.name}</div>
                        <div className={d.current__date}>{date}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CurrentDay;