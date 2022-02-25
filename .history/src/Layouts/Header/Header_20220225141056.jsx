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
          <img src={tel} width ={20} height = {20} alt="" /> <p>+7 989 82 220 77</p>{" "}
        </li>
        <li>
          {" "}
          <img src={geo} width ={20} height = {20} alt="" /> <p>г. Анапа, Анапское шоссе 83А</p>{" "}
        </li>
        <li>
          {" "}
          <img src={mail} width ={20} height = {20} alt="" />p{" "}
        </li>
      </ul>
    </div>
  );
}
