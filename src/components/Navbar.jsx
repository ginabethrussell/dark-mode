import React, { useState } from 'react';

const Navbar = (props) => {
  console.log(props);
  const {title} = props;

  const toggleMode = e => {
    e.preventDefault();
    props.setDarkMode(!props.darkMode);
  };
  return (
    <nav className="navbar">
      {
        title? <h1>Crypto {title}</h1> : <h1>Crypto Tracker</h1>
      }
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={props.darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
