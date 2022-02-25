import React from "react";
import style from "./Header.module.scss";
import geo from "../../Images/Geo.png"
import mail from "../../Images/mail.png"
import tel  from "../../Images/Tel.png"

export default function Header() {
  return(
      <div className={style.adressbox}>
         <ul>
             <li> <img src={tel} alt="" />   +7 989 82 220 77  </li>
             <li> <img src={geo} alt="" />   +7 989 82 220 77  </li>
             <li> <img src={mail} alt="" />  +7 989 82 220 77  </li>
         </ul>
      </div>
  )
}
