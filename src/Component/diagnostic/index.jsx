import React from "react";
import c from './style.module.scss';
import img1 from '../../assets/image/Vector7.svg';
import img2 from '../../assets/image/Vector8.svg';
import img3 from '../../assets/image/Vector9.svg';
import img4 from '../../assets/image/Vector10.svg';

function Diagnostik() {
  return (
    <div className="container">
      <ul className={c.diagnostic}>
        <li>
          <div className={c.diagnosticimg}>
            <img className={c.img1} src={img1} alt="" />
          </div>
          <div>
            <h5>375</h5>
            <p>Toshkent BABM ga jalb qilingan o’quvchilar soni</p>
          </div>
        </li>
        <li>
          <div className={c.diagnosticimg}>
            <img  className={c.img2} src={img2} alt="" />
          </div>
          <div>
            <h5>3.2%</h5>
            <p>Maktabi o’quvchilari soniga nisbati</p>
          </div>
        </li>
        <li>
          <div className={c.diagnosticimg} >
            <img className={c.img3} src={img3} alt="" />
          </div>
          <div>
            <h5>35</h5>
            <p>Toshkent BABM dagi xodimlar soni</p>
          </div>
        </li>
        <li>
          <div className={c.diagnosticimg}>
            <img  className={c.img4} src={img4} alt="" />
          </div>
          <div>
            <h5>55+</h5>
            <p>Toshkent BABM dagi to’garaklar soni</p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Diagnostik;
