import React, {useState, useEffect} from 'react';
import Ticker from 'react-ticker';

const CryptoCurrencyTicker = (props) => {
    console.log(props.coinData);
    const [tickerData, setTickerData] = useState('');

    const createTickerData = () => {
        let newTickerData = '';
        const spacing = ' ----- ';
        props.coinData.forEach(coin => {
            console.log(coin.name);
            newTickerData += ` ${coin.name} ${coin.price_change_24h} ${spacing} `;
        });
        setTickerData(newTickerData);
    }
    
    useEffect(()=> {
        if (props.coinData.length > 1){
            createTickerData();
        }  
    },[props.coinData]);
    
    return (
            <div className="ticker">
                <span className="ticker_title px-2">Currency Rate Changes in the Last 24 Hours</span>
                {console.log('tickerData', tickerData)}
                {tickerData &&
                    <Ticker>
                        {({ index }) => (
                        <span style={{ whiteSpace: "nowrap" }} className="ticker_content">
                        {tickerData}
                        </span>
                        )}
                    </Ticker>
                }               
            </div>
        )
}
export default CryptoCurrencyTicker;