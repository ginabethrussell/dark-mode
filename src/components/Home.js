import React from 'react';
import Navbar from './Navbar';
import Charts from './Charts';
import Ticker from './Ticker';

export default function Home(props) {
    const {darkMode, setDarkMode, coinData} = props;
    return (
        <div className={darkMode ? "dark-mode App" : "App"}>
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            <Ticker className='ticker-wrapper' coinData={coinData}/>
            <Charts coinData={coinData} />
        </div>
    )
}