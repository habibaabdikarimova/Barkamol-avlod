import React from "react";
import c from "./style.module.scss";
import facebook from "../../assets/image/logos_facebook.png";
import instagram from "../../assets/image/skill-icons_instagram.png";
import telegram from "../../assets/image/logos_telegram.png";

function SocialNetworks() {
  return (
    <div className="container">
      <div className={c.networks}>
        <h4 className={c.title}>Yangilikni ijtimoiy tarmoqlarda ulashing</h4>
        <ul className={c.networkcards}>
          <li className={c.networkcard}>
            <img src={facebook} alt="" />
            <a href="https://www.facebook.com/@tosh_babm">Facebook</a>
          </li>
          <li className={c.networkcard}>
            <img src={instagram} alt="" />
            <a href="https://www.instagram.com/@toshbabm">Instagram</a>
          </li>
          <li className={c.networkcard}>
            <img src={telegram} alt="" />
            <a href="https://t.me/@toshkent_babm">Telegram</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SocialNetworks;
