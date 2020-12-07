import React from 'react';
import {useParams} from 'react-router-dom';

export default function CoinInfo() {
    const params = useParams();
    console.log(params);
    return (
        <div>
            <h1>{params.coin}</h1>
        </div>
    )

}