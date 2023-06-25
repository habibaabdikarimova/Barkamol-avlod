import React from "react";
import icimg1 from "../../../assets/image/Rectangle 8 (1).png";
import icimg2 from "../../../assets/image/Vector3.svg";
import c from "./style.module.scss";
import Button from "../../../Component/Button";
import SocialNetworks from "../../../Component/socialNetworks";

function Fotos() {
  return (
    <div className={c.InformationCard}>
      <div className="container">
        <p className="subttl">Axborot xizmati {">"} Fotogalereya</p>
        <h3 className="ttl">Fotogalereya</h3>
        <ul className={c.InformationCards}>
          <li className={c.InformationCard}>
            <img src={icimg1} alt="" />

            <div className={c.cardData}>
              <img src={icimg2} alt="" />
              <span>20:30 | 03.02.2023</span>
            </div>
            <strong>
              Prezident ta’lim sohasini rivojlantitish va takomillashtirish
              bo’yicha yana bir yangi qarorni tasdiqladi
            </strong>
          </li>
          <li className={c.InformationCard}>
            <img src={icimg1} alt="" />

            <div className={c.cardData}>
              <img src={icimg2} alt="" />
              <span>20:30 | 03.02.2023</span>
            </div>
            <strong>
              Prezident ta’lim sohasini rivojlantitish va takomillashtirish
              bo’yicha yana bir yangi qarorni tasdiqladi
            </strong>
          </li>
          <li className={c.InformationCard}>
            <img src={icimg1} alt="" />

            <div className={c.cardData}>
              <img src={icimg2} alt="" />
              <span>20:30 | 03.02.2023</span>
            </div>
            <strong>
              Prezident ta’lim sohasini rivojlantitish va takomillashtirish
              bo’yicha yana bir yangi qarorni tasdiqladi
            </strong>
          </li>
          <li className={c.InformationCard}>
            {" "}
            <img src={icimg1} alt="" />
            <div className={c.cardData}>
              <img src={icimg2} alt="" />
              <span>20:30 | 03.02.2023</span>
            </div>
            <strong>
              Prezident ta’lim sohasini rivojlantitish va takomillashtirish
              bo’yicha yana bir yangi qarorni tasdiqladi
            </strong>
          </li>
          <li className={c.InformationCard}>
            <img src={icimg1} alt="" />

            <div className={c.cardData}>
              <img src={icimg2} alt="" />
              <span>20:30 | 03.02.2023</span>
            </div>
            <strong>
              Prezident ta’lim sohasini rivojlantitish va takomillashtirish
              bo’yicha yana bir yangi qarorni tasdiqladi
            </strong>
          </li>
          <li className={c.InformationCard}>
            <img src={icimg1} alt="" />

            <div className={c.cardData}>
              <img src={icimg2} alt="" />
              <span>20:30 | 03.02.2023</span>
            </div>
            <strong>
              Prezident ta’lim sohasini rivojlantitish va takomillashtirish
              bo’yicha yana bir yangi qarorni tasdiqladi
            </strong>
          </li>
        </ul>
        <Button btnTitle={"<  Ortga"} />
        <SocialNetworks />
      </div>
    </div>
  );
}

export default Fotos;
