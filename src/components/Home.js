import React from 'react';
import Navbar from './Navbar';
import Charts from './Charts';

export default function Home(props) {
    const {darkMode, setDarkMode, coinData} = props;
    return (
        <div className={darkMode ? "dark-mode App" : "App"}>
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            <Charts coinData={coinData} />
        </div>
    )
}