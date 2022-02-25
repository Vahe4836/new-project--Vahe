import React from "react";
import style from "./Header.module.scss";
import geo from "../../Images/Geo.png";
import mail from "../../Images/mail.jpg";
import tel from "../../Images/Tel.png";

export default function Header() {
  return (
    <div className={style.adressbox}>
      <ul>
        <li>
          {" "}
          <img src={tel} width ={30} height = {20} alt="" /> +7 989 82 220 77{" "}
        </li>
        <li>
          {" "}
          <img src={geo} width ={30} height = {20} alt="" /> г. Анапа, Анапское шоссе 83А{" "}
        </li>
        <li>
          {" "}
          <img src={mail} width ={30} height = {20} alt="" /> ars-oil@mail.ru{" "}
        </li>
      </ul>
    </div>
  );
}
