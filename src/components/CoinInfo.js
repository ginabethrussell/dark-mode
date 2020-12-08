import React, {useState, useEffect} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';

export default function CoinInfo(props) {
    const params = useParams();
    console.log(params.coin);
    const history = useHistory();
    const [coin, setCoin ] = useState(params.coin.toLowerCase());
    const [coinData, setCoinData] = useState(null);

    useEffect(()=> {
        axios.get(`https://api.coingecko.com/api/v3/coins/${coin}`)
        .then(response => {
            console.log(response.data);
            setCoinData(response.data);
            console.log(response.data.description.en);
        })
            
        .catch(err => console.log(err))
    }, [])
    
    return (
        <div>
            <div className={props.darkMode ? "dark-mode coin-info-wrapper" : "coin-info-wrapper"}>
                <Navbar title='Currency' darkMode={props.darkMode} setDarkMode={props.setDarkMode}/>
                {coinData && 
                <div className="coin-info">
                    <div className="coin-info-header">
                        <h2>Name: {coinData.name}</h2>
                        <h2>Symbol: {coinData.symbol}</h2>
                        <img src={coinData.image.small}  alt={coinData.name} />
                    </div>
                    <div className='coin-description' dangerouslySetInnerHTML={{ __html: coinData.description.en }} />
                    <ul className='coin-info-list'>
                        <li>Coin Gecko Rank: {coinData.coingecko_rank}</li>
                        <li>Coin Gecko Score: {coinData.coingecko_score}</li>
                        <li className='coin-home-link'><a href={coinData.links.homepage[0]} target="_blank">{coinData.name} Home Page</a></li>
                    </ul>
                    <button className='coin_button' onClick={()=> history.push('/')}>Back to Tracker</button>
                </div>
                }
            </div>
        </div>
    )

}