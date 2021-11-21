import React from 'react';
import c from './CardDay.module.scss';

type CardProps = {
    dayItem: any
}

const CardDay = ({dayItem}: CardProps) => {

    const {dt,weather, temp} = dayItem;
    const dateF = new Date(dt * 1000);
    const options: any = {weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric'};
    const date = new Intl.DateTimeFormat('en-GB', options).format(dateF);
    const kelvinToCel = (t: number) => {return Math.floor(t - 273);};

    return (
        <div className={c.card_day}>
            <img
                src={`https://openweathermap.org/img/w/${weather[0]['icon']}.png`}
                alt="weather status icon"
            />
            <div className={c.temp_day}>{kelvinToCel(temp.day)}</div>
            <div className={c.temp_night}>{kelvinToCel(temp.night)}</div>
            <div className={c.date}>{date}</div>
        </div>
    );
};

export default CardDay;