import React from 'react';
import { style } from './style';
import logo from './img/logo.png';
import floor from './img/floor.png';

function About() {
  return (
    <div style={style.screen_about} className="screen_about">
      <div style={style.about_title} className="about_title">О нас</div>
      <div style={style.information_container} className="information_container">
        <div style={style.container_for_img_and_experience} className="container_for_img_and_experience">
          <div style={style.img_container} className="img_container">
            <img src={logo} width="200" height="100" alt={"logo"}></img>
          </div>
          <div style={style.experience_container} className="experience_container">На рынке с 2014 года</div>
        </div>
        <div style={style.description_container} className="description_container">
          <div style={style.description_text} className="description_text">Все наши товары оригинальные и подлинные.
            Мы являемся представителями торговых марок Coswick,Tarkett, Esta Parket, Woodberry, Kaindl и т.д.,
            а также поставщиками в РБ таких известных мировых брендов, как Kahrs,
            Karelia, включая эксклюзивные 3д стеновых панелей от компании «Артполе».</div>
          <div style={style.description_list_container} className="description_list_container">
            <ul style={style.description_list} className="description_list">
              <li>Паркет, паркетная доска</li>
            <li>Штучный и модульный паркет</li>
            <li>Коммерческое покрытие ПВХ</li>
            <li>Большой выбор аксессуаров, сопутствующих материалов и средств по уходу</li>
          </ul>
          </div>
        </div>
      </div>
    </div>
  )
};

export default About;