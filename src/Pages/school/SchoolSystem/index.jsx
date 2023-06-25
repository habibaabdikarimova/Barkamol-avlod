import React from "react";
import img from "../../../assets/image/schoolsystem.png";
import c from "./style.module.scss";
import Button from "../../../Component/Button";
import { Link } from "react-router-dom";

function SchoolSystem() {
  return (
    <div className={c.schoolsystem}>
      <div className={c.TextCard}>
        <p className={c.p}>Maktab {">"} Maktab Tuzilmasi</p>
        <h2 className={c.h2}>Toshkent shahar “Barkamol Avlod” bolalar maktabining tuzilmasi</h2>
      </div>
      <img src={img} alt="" />
      <Link to={"/"}>
        <Button btnTitle={"< Ortga"} />
      </Link>
    </div>
  );
}

export default SchoolSystem;
