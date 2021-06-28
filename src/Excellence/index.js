import React from 'react';
import { style } from './style';

function Excellence() {
  return (
    <main style={style.main} className="main">
      <div style={style.container_for_title} className="container_for_title">Преимущества</div>
      <div style={style.container_for_excellence} className="container_for_excellence">
        <div style={style.excellence_item} className="excellence_item">
            <div style={style.excellence_icon} className="excellence_icon"></div>
          <div style={style.excellence_description_container} className="excellence_description_container">
          <div style={style.excellence_title} className="excellence_title"></div>
            <div style={style.excellence_description} className="excellence_description"></div>
        </div>
      </div>
    </div>
    </main>
  )
};

export default Excellence;