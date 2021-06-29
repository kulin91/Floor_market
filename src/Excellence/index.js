import React from 'react';
import { style } from './style';
import exp from './img/exp.png';
import gua from './img/gua.png';
import qua from './img/qua.png';

function Excellence() {
  return (
    <main style={style.main} className="main">
      <div style={style.container_for_title_excellence} className="container_for_title_excellence">Наши преимущества
        <hr style={style.types_line_excellence} className="types_line" />
      </div>
      <div style={style.box_for_container_excellence} className="box_for_container_excellence">
        <div style={style.container_for_excellence} className="container_for_excellence">
          <div style={style.excellence_item} className="excellence_item">
            <div style={style.excellence_icon} className="excellence_icon">
              <img src={exp} width="33" height="33" alt={"logo"}></img></div>
            <div style={style.excellence_description_container} className="excellence_description_container">
              <div style={style.excellence_title} className="excellence_title">Опыт</div>
              <div style={style.excellence_description} className="excellence_description">description</div>
            </div>
          </div>
          <div style={style.excellence_item} className="excellence_item">
            <div style={style.excellence_icon} className="excellence_icon">
              <img src={gua} width="30" height="30" alt={"logo"}></img></div>
            <div style={style.excellence_description_container} className="excellence_description_container">
              <div style={style.excellence_title} className="excellence_title">Гарантии</div>
              <div style={style.excellence_description} className="excellence_description">description</div>
            </div>
          </div>
          <div style={style.excellence_item} className="excellence_item">
            <div style={style.excellence_icon} className="excellence_icon">
              <img src={qua} width="30" height="30" alt={"logo"}></img></div>
            <div style={style.excellence_description_container} className="excellence_description_container">
              <div style={style.excellence_title} className="excellence_title">Качество</div>
              <div style={style.excellence_description} className="excellence_description">description</div>
            </div>
          </div>
        </div>
        <div style={style.container_for_excellence} className="container_for_excellence">
          <div style={style.excellence_item} className="excellence_item">
            <div style={style.excellence_icon} className="excellence_icon">
              <img src={exp} width="33" height="33" alt={"logo"}></img></div>
            <div style={style.excellence_description_container} className="excellence_description_container">
              <div style={style.excellence_title} className="excellence_title">Опыт</div>
              <div style={style.excellence_description} className="excellence_description">description</div>
            </div>
          </div>
          <div style={style.excellence_item} className="excellence_item">
            <div style={style.excellence_icon} className="excellence_icon">
              <img src={gua} width="30" height="30" alt={"logo"}></img></div>
            <div style={style.excellence_description_container} className="excellence_description_container">
              <div style={style.excellence_title} className="excellence_title">Гарантии</div>
              <div style={style.excellence_description} className="excellence_description">description</div>
            </div>
          </div>
          <div style={style.excellence_item} className="excellence_item">
            <div style={style.excellence_icon} className="excellence_icon">
              <img src={qua} width="30" height="30" alt={"logo"}></img></div>
            <div style={style.excellence_description_container} className="excellence_description_container">
              <div style={style.excellence_title} className="excellence_title">Качество</div>
              <div style={style.excellence_description} className="excellence_description">description</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
};

export default Excellence;