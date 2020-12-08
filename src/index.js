import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReactDOM from "react-dom";
import axios from "axios";

import Home from "./components/Home";
import CoinInfo from "./components/CoinInfo";

import useDarkMode from "./hooks/useDarkMode";

import "./styles.scss";

const App = () => {
  const [coinData, setCoinData] = useState([]);
  const [darkMode, setDarkMode] = useDarkMode();

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then(res => {
        console.log(res);
        setCoinData(res.data);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <Switch>
      <Route path='/:coin' render={() => <CoinInfo darkMode={darkMode} setDarkMode={setDarkMode}/> }/>
      <Route path='/' render={()=> <Home darkMode={darkMode} setDarkMode={setDarkMode} coinData={coinData}/> } />
    </Switch>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <App />
  </Router>, rootElement);
