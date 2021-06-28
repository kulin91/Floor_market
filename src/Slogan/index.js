import React from 'react';
import { style } from './style';
// import logo from './img/logo.png';

function Slogan() {
  return (
    <main style={style.main} className="main">
      <div style={style.slogan_container} className="slogan_container">Шлифовка без пыли и укладка паркетных и дощатых полов</div>
    </main>
  )
};

export default Slogan;