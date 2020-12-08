import React from "react";
import Chart from "./Chart";
import { useHistory } from 'react-router-dom';

const Charts = ({ coinData }) => {
  const history = useHistory();
 

  const handleClick = (coinData) =>{
    console.log(coinData.name);
    history.push(`/${coinData.name}`)
  }
  return (
    <div className="charts">
      {coinData.map(coin => (
        <div className="chart__container" key={coin.name}>
          <div className='coin_header'>
            <h2 className="coin__title">{coin.name}</h2>
            <h4 className="coin__symbol">symbol: {coin.symbol}</h4>
            <button className="coin_button" onClick={() => handleClick(coin)}>More About {coin.name}</button>
          </div>
          <div className="coin__logo">
            <img src={coin.image} height="40" alt={coin.name} />
          </div>
          <Chart sparklineData={coin.sparkline_in_7d.price} />
        </div>
      ))}
    </div>
  );
};
export default Charts;
