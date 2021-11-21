import React, {ChangeEvent, useState} from 'react';
import s from './SearchCity.module.scss';

type CityValueProps = {
    onChangeCIty: (city: string) => void
};

const SearchCity = (props: CityValueProps) => {

    const [searchCity, setSearchCity] = useState<string>('');

    function onHandlerCity(e: ChangeEvent<HTMLInputElement>) {
        let city = e.currentTarget.value;
        let re = /[а-яёА-ЯЁ0-9?!@#$%^&*:()_=+-]/g;
        city = city.replace(re, '');
        setSearchCity(city);
    }

    function onSearchCity() {
        let city = searchCity;
        city = city[0].toUpperCase() + city.slice(1);
        localStorage.setItem('city', JSON.stringify(city));
        props.onChangeCIty(city);
        setSearchCity('')
    }

    return (
        <>
            <div className={s.search__input}>
                <input
                    type="text"
                    value={searchCity}
                    placeholder='Enter city...'
                    onChange={e => onHandlerCity(e)}
                />
                <div className={s.button} onClick={onSearchCity}>search</div>
            </div>
            <div className={s.note}>* english letters</div>
        </>
    );
};

export default SearchCity;