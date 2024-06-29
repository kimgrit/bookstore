import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header>
            <nav>
                <h1>
                    책<span>-</span>갈피 <img src={process.env.PUBLIC_URL + '/logo.png'} />
                </h1>
                <a href="/">Home</a>
            </nav>
        </header>
    );
};

export default Header;
