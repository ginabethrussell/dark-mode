import React, {useState} from 'react';
import {useParams} from 'react-router-dom';

export default function CoinInfo() {
    const params = useParams();
    console.log(params.coin);
    const [coin, setCoin ] = useState(params.coin);
    return (
        <div>
            <h1>{params.coin}</h1>
        </div>
    )

}