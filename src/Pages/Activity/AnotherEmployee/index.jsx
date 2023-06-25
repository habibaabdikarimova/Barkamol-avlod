import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../Component/Button";
import c from "./style.module.scss";
import img from "../../../assets/image/personImg.png";

function AnotherEmployee() {
  return (
    <div>
      <div className={c.Direction}>
        <div className="container">
          <p>Faoliyat {">"} Boshqa xodimlar</p>
          <h3>Toshkent shahar “Barkamol Avlod” bolalar maktabi xodimlari</h3>
          <ul>
            <li>
              <img src={img} alt="" />
              <h3>
                Mirsagatova <br /> Tamara <br /> Maxamatovna
              </h3>
              <p>Toshkent shahar BABM direktori</p>
              <a href="mailto:info@barkamolavlod.uz">
                E-mail: info@barkamolavlod.uz
              </a>
              <br />
              <a href="tel:+998712373422">Telefon raqami: +998 71 237 34 22</a>
            </li>
            <li>
              <img src={img} alt="" />
              <h3>
                Mirsagatova <br /> Tamara <br /> Maxamatovna
              </h3>
              <p>Toshkent shahar BABM direktori</p>
              <a href="mailto:info@barkamolavlod.uz">
                E-mail: info@barkamolavlod.uz
              </a>
              <br />
              <a href="tel:+998712373422">Telefon raqami: +998 71 237 34 22</a>
            </li>
            <li>
              <img src={img} alt="" />
              <h3>
                Mirsagatova <br /> Tamara <br /> Maxamatovna
              </h3>
              <p>Toshkent shahar BABM direktori</p>
              <a href="mailto:info@barkamolavlod.uz">
                E-mail: info@barkamolavlod.uz
              </a>
              <br />
              <a href="tel:+998712373422">Telefon raqami: +998 71 237 34 22</a>
            </li>
            <li>
              <img src={img} alt="" />
              <h3>
                Mirsagatova <br /> Tamara <br /> Maxamatovna
              </h3>
              <p>Toshkent shahar BABM direktori</p>
              <a href="mailto:info@barkamolavlod.uz">
                E-mail: info@barkamolavlod.uz
              </a>
              <br />
              <a href="tel:+998712373422">Telefon raqami: +998 71 237 34 22</a>
            </li>
            <li>
              <img src={img} alt="" />
              <h3>
                Mirsagatova <br /> Tamara <br /> Maxamatovna
              </h3>
              <p>Toshkent shahar BABM direktori</p>
              <a href="mailto:info@barkamolavlod.uz">
                E-mail: info@barkamolavlod.uz
              </a>
              <br />
              <a href="tel:+998712373422">Telefon raqami: +998 71 237 34 22</a>
            </li>
            <li>
              <img src={img} alt="" />
              <h3>
                Mirsagatova <br /> Tamara <br /> Maxamatovna
              </h3>
              <p>Toshkent shahar BABM direktori</p>
              <a href="mailto:info@barkamolavlod.uz">
                E-mail: info@barkamolavlod.uz
              </a>
              <br />
              <a href="tel:+998712373422">Telefon raqami: +998 71 237 34 22</a>
            </li>
            <li>
              <img src={img} alt="" />
              <h3>
                Mirsagatova <br /> Tamara <br /> Maxamatovna
              </h3>
              <p>Toshkent shahar BABM direktori</p>
              <a href="mailto:info@barkamolavlod.uz">
                E-mail: info@barkamolavlod.uz
              </a>
              <br />
              <a href="tel:+998712373422">Telefon raqami: +998 71 237 34 22</a>
            </li>
            <li>
              <img src={img} alt="" />
              <h3>
                Mirsagatova <br /> Tamara <br /> Maxamatovna
              </h3>
              <p>Toshkent shahar BABM direktori</p>
              <a href="mailto:info@barkamolavlod.uz">
                E-mail: info@barkamolavlod.uz
              </a>
              <br />
              <a href="tel:+998712373422">Telefon raqami: +998 71 237 34 22</a>
            </li>
          </ul>
          <Link to={"/"}>
            <Button btnTitle={"< Ortga"} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AnotherEmployee;
