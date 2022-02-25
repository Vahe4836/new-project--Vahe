import React from "react";
import style from "./Header.module.scss";
import geo from "../../icons/address_icon.png";
import mail from "../../icons/mail_icon.png";
import tel from "../../icons/tel_icon.png";
import logo from "../../Images/logo.png";

export default function Header() {
  return (
    <>
      <div className={style.adressbox}>
        <ul>
          <li>
            {" "}
            <img src={tel} width={20} height={20} alt="" />{" "}
            <p>+7 989 82 220 77</p>{" "}
          </li>
          <li>
            {" "}
            <img src={geo} width={20} height={20} alt="" />{" "}
            <p>г. Анапа, Анапское шоссе 83А</p>{" "}
          </li>
          <li>
            {" "}
            <img src={mail} width={20} height={20} alt="" />{" "}
            <p>ars-oil@mail.ru</p>{" "}
          </li>
        </ul>
      </div>

        <div className={style.logo}>
          <img src={logo} width={160} height={160} alt="" />
        </div>
      <div className={style.Main}>
        <div className={style.forText} >
            <h1> ЗОЛОТАЯ КОЛЕСНИЦА </h1>
            <h2>АВТОСЕРВИС</h2>
        </div>
      </div>
    </>
  );
}
