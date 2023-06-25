import React from "react";
import img from "../../assets/image/Vector2.svg";
import c from "./style.module.scss";
import img5 from "../../assets/image/Intersect.png";
import img2 from '../../assets/image/Intersect.jpg';
import img3 from '../../assets/image/Intersect2.png';
import img1 from '../../assets/image/Intersect1.png';
import img4 from '../../assets/image/Intersect4.png';
import img6 from '../../assets/image/Intersect5.png';
import img7 from '../../assets/image/Intersect7.png';



function CircleCard() {
  return (
    <div className="container">
      <ul className={c.ul}>
      <li className={c.card1}>
        <img className={c.images} src={img1} alt="" />
        <div className={c.minbox}>
          <h3 className={c.cardTitle}>Madaniyat va san’at </h3>
          <div className={c.text}>
            <p className={c.cardText}>
              Madaniyat va san’at yo‘nalishida 11 turdagi to‘garak mavjud
            </p>
            <img src={img} alt="" />
          </div>
        </div>
      </li>
      <li className={c.card2}>
        <img className={c.images} src={img2} alt="" />
        <div className={c.minbox}>
          <h3 className={c.cardTitle}>Madaniyat va san’at </h3>
          <div className={c.text}>
            <p className={c.cardText}>
              Madaniyat va san’at yo‘nalishida 11 turdagi to‘garak mavjud
            </p>
            <img src={img} alt="" />
          </div>
        </div>
      </li>
      <li className={c.card3}>
        <img className={c.images} src={img3} alt="" />
        <div className={c.minbox}>
          <h3 className={c.cardTitle}>Madaniyat va san’at </h3>
          <div className={c.text}>
            <p className={c.cardText}>
              Madaniyat va san’at yo‘nalishida 11 turdagi to‘garak mavjud
            </p>
            <img src={img} alt="" />
          </div>
        </div>
      </li>
      <li className={c.card4}>
        <img className={c.images} src={img4} alt="" />
        <div className={c.minbox}>
          <h3 className={c.cardTitle}>Madaniyat va san’at </h3>
          <div className={c.text}>
            <p className={c.cardText}>
              Madaniyat va san’at yo‘nalishida 11 turdagi to‘garak mavjud
            </p>
            <img src={img} alt="" />
          </div>
        </div>
      </li>
      <li className={c.card5}>
        <img className={c.images} src={img5} alt="" />
        <div className={c.minbox}>
          <h3 className={c.cardTitle}>Madaniyat va san’at </h3>
          <div className={c.text}>
            <p className={c.cardText}>
              Madaniyat va san’at yo‘nalishida 11 turdagi to‘garak mavjud
            </p>
            <img src={img} alt="" />
          </div>
        </div>
      </li>
      <li className={c.card6}>
        <img className={c.images} src={img6} alt="" />
        <div className={c.minbox}>
          <h3 className={c.cardTitle}>Madaniyat va san’at </h3>
          <div className={c.text}>
            <p className={c.cardText}>
              Madaniyat va san’at yo‘nalishida 11 turdagi to‘garak mavjud
            </p>
            <img src={img} alt="" />
          </div>
        </div>
      </li>
      <li className={c.card7}>
        <img className={c.images} src={img7} alt="" />
        <div className={c.minbox}>
          <h3 className={c.cardTitle}>Madaniyat va san’at </h3>
          <div className={c.text}>
            <p className={c.cardText}>
              Madaniyat va san’at yo‘nalishida 11 turdagi to‘garak mavjud
            </p>
            <img src={img} alt="" />
          </div>
        </div>
      </li>
    </ul>
    </div>
  );
}

export default CircleCard;
