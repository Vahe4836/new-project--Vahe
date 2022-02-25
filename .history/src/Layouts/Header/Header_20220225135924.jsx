import React from "react";
import style from "./Header.module.scss";
import  geo   from "../../Images"

export default function Header() {
  return(
      <div className={style.adressbox}>
         <ul>
             <li>     +7 989 82 220 77  </li>
             <li></li>
             <li></li>
         </ul>
      </div>
  )
}
