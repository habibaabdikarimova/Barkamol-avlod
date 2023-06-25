import React from "react";
import headerLogo from "../../assets/image/LOGO.svg";
import { Link } from "react-router-dom";
import "./style.scss";
import telegramimg from "../../assets/image/logos_telegram.png";
import instagtamimg from "../../assets/image/skill-icons_instagram.png";
import facebookimg from "../../assets/image/logos_facebook.png";

import Button from "../../Component/Button";

function Footer() {
  return (
    <div className="footer">
      <div className="container containerfoo">
        <div className="fooleftelements">
          <div className="logo">
            <Link to={"/"}>
              <img className="logo" src={headerLogo} alt="" />
            </Link>
          </div>
          <p>
            10011, O’zbekiston, Toshkent, Shayxontoxur tumani, Navoiy ko’chasi,
            2A uy
          </p>
          <ul className="foonetworks">
            <li className="foonet">
              <img src="" alt="" />
              <a href="https://www.instagram.com/@toshbabm">@toshbabm</a>
            </li>
            <li className="foonet">
              <img src="" alt="" />
              <a href="https://t.me/@toshkent_babm">@toshkent_babm</a>
            </li>
            <li className="foonet">
              <img src={facebookimg} alt="" />
              <a href="tel:+998999999999">+998999999999</a>
            </li>
            <li className="foonet">
              <img src={instagtamimg} alt="" />
              <a href="mailto:info@tbabm.uz">info@tbabm.uz</a>
            </li>
            <li className="foonet">
              <img src={telegramimg} alt="" />
              <a href="https://www.facebook.com/@tosh_babm">@tosh_babm</a>
            </li>
          </ul>
        </div>
        <div className="foorightelements">
          <form action="">
            <input type="text" placeholder="ismingiz..." />
            <input type="text" placeholder="elektron pochta..." />
            <Button btnTitle={"ortga qaytish"} />
          </form>
          <ul className="foolinks">
            <li className="maktab">
              <h3>Maktab</h3>
              <Link to={"/aboutschool"}> Maktab haqida</Link>
              <Link to={"/direction"}> Raxbariyat</Link>
              <Link to={"/schoolsystem"}> Maktab Tuzilmasi</Link>
            </li>
            <li className="hujjatlar">
              <h3>Hujjatlar</h3>
              <Link to={"/decision1"}>331-qaror</Link>
              <Link to={"/decision2"}>4467-qaror</Link>
            </li>
            <li className="talim">
              <h3>Ta’lim yo’nalishlari</h3>
              <Link to={"/trainingfiles"}>Madaniyat va san’at</Link>
              <Link to={"/trainingfiles"}>
                Texnika konstruktorlik va modellashtirish
              </Link>
              <Link to={"/trainingfiles"}>Jismoniy tarbiya va sport</Link>
              <Link to={"/trainingfiles"}>Hunarmandchilik va qo‘l mehnati</Link>
              <Link to={"/trainingfiles"}>Ekologiya va turizm</Link>
              <Link to={"/trainingfiles"}>
                Oliy ta’lim muassasalari va maktabga tayyorlov
              </Link>
              <Link to={"/trainingfiles"}>Xorijiy tillar</Link>
            </li>
            <li className="faoliyat">
              <h3>Faoliyat</h3>
              <Link to={"/aboutschool"}> To'garak rahbarlari</Link>
              <Link to={"/direction"}>Boshqa rahbarlar</Link>
            </li>
            <li className="axborot">
              <h3>Axborot xizmati</h3>
              <Link to={"/aboutschool"}> Galareya</Link>
              <Link to={"/schoolsystem"}> Maktab Tuzilmasi</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
