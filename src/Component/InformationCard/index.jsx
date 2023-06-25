import React from "react";
import icimg1 from "../../assets/image/Rectangle 8 (1).png";
import icimg2 from "../../assets/image/Vector3.svg";
import c from "./style.module.scss";
import { Link } from "react-router-dom";

function InformationCard() {
  return (
    <div className={c.InformationCard}>
      <div className="container">
        <ul className={c.InformationCards}>
          <Link to={"/news"}>
            <li className={c.InformationCard}>
              <img src={icimg1} alt="" />
              <p>Yangiliklar</p>
              <div className={c.cardData}>
                <img src={icimg2} alt="" />
                <span>20:30 | 03.02.2023</span>
              </div>
              <strong>
                Prezident ta’lim sohasini rivojlantitish va takomillashtirish
                bo’yicha yana bir yangi qarorni tasdiqladi
              </strong>
            </li>
          </Link>
          <Link to={"/news"}>
            <li className={c.InformationCard}>
              <img src={icimg1} alt="" />
              <p>Yangiliklar</p>
              <div className={c.cardData}>
                <img src={icimg2} alt="" />
                <span>20:30 | 03.02.2023</span>
              </div>
              <strong>
                Prezident ta’lim sohasini rivojlantitish va takomillashtirish
                bo’yicha yana bir yangi qarorni tasdiqladi
              </strong>
            </li>
          </Link>
          <Link to={"/news"}>
            <li className={c.InformationCard}>
              <img src={icimg1} alt="" />
              <p>Yangiliklar</p>
              <div className={c.cardData}>
                <img src={icimg2} alt="" />
                <span>20:30 | 03.02.2023</span>
              </div>
              <strong>
                Prezident ta’lim sohasini rivojlantitish va takomillashtirish
                bo’yicha yana bir yangi qarorni tasdiqladi
              </strong>
            </li>
          </Link>
          <Link to={"/news"}>
            <li className={c.InformationCard}>
              {" "}
              <img src={icimg1} alt="" />
              <p>Yangiliklar</p>
              <div className={c.cardData}>
                <img src={icimg2} alt="" />
                <span>20:30 | 03.02.2023</span>
              </div>
              <strong>
                Prezident ta’lim sohasini rivojlantitish va takomillashtirish
                bo’yicha yana bir yangi qarorni tasdiqladi
              </strong>
            </li>
          </Link>
          <Link to={"/news"}>
            <li className={c.InformationCard}>
              <img src={icimg1} alt="" />
              <p>Yangiliklar</p>
              <div className={c.cardData}>
                <img src={icimg2} alt="" />
                <span>20:30 | 03.02.2023</span>
              </div>
              <strong>
                Prezident ta’lim sohasini rivojlantitish va takomillashtirish
                bo’yicha yana bir yangi qarorni tasdiqladi
              </strong>
            </li>
          </Link>
          <Link to={"/news"}>
            <li className={c.InformationCard}>
              <img src={icimg1} alt="" />
              <p>Yangiliklar</p>
              <div className={c.cardData}>
                <img src={icimg2} alt="" />
                <span>20:30 | 03.02.2023</span>
              </div>
              <strong>
                Prezident ta’lim sohasini rivojlantitish va takomillashtirish
                bo’yicha yana bir yangi qarorni tasdiqladi
              </strong>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default InformationCard;
