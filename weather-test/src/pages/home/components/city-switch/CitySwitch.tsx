import React from 'react';
import b from './CitySwitch.module.scss';

export type TypeTabs={
    name: string
};

type TabsTypeProps={
    onChangeCity: (city: string) => void
};

const CitySwitch = (props:TabsTypeProps) => {

    function onTabClick(name: string){
        props.onChangeCity(name)
    }

    const tabs: TypeTabs[]=[
        {name: 'Minsk'},
        {name: 'Moscow'},
        {name: 'Bratislava'},
    ];

    return (
        <div className={b.buttons_city}>
            {tabs.map(t=>
                <div className={b.button} key={t.name} onClick={()=>onTabClick(t.name)}>
                    {t.name}
                </div>
            )}
        </div>
    );
};

export default CitySwitch;