import React from 'react';
import { Link } from 'react-router-dom';
import h from './Header.module.scss';

const Header = () => {
    return (
        <div className={h.header}>
            <div className={h.title}>The weather of your city</div>
            <div className={h.navbar}>
                <Link to='/' className={h.link}>Home</Link>
                <Link to='/days-statistics' className={h.link}>For 8 days</Link>
            </div>
        </div>
    );
};

export default Header;