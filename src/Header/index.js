import React from 'react';
import {style} from './style';
import logo from './img/logo.png';


function Header() {
  return (
    <header style={style.header} className="header">
      <div style={style.header_img_container} className="header_img_container">
        <img src={logo} width="200" height="100" alt={"logo"}></img>
      </div>
      <div style={style.container_for_navigation_panel} className="container_for_navigation_panel">
        <div style={style.navigation_panel} className="navigation_panel">
          <div style={style.item_navigation_panel} className="item_navigation_panel">О нас</div>
          <div style={style.item_navigation_panel} className="item_navigation_panel">Наши преимущества</div>
          <div style={style.item_navigation_panel} className="item_navigation_panel">Услуги</div>
          <div style={style.item_navigation_panel} className="item_navigation_panel">Цены</div>
          <div style={style.item_navigation_panel} className="item_navigation_panel">Контакты</div>
        </div>
        {/* <div style={style.item_navigation_panel} className="navigation_panel_number">+375 (29) 111 22 33</div> */}
      </div>
    </header>
    )

}

export default Header;