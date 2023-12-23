import React from "react";
import cafeServices from "../utile/CafeService";
import logo from "../images/Sans titre.png"

function Header() { 
    const header = cafeServices.map((cafeService) =>(
        <ul>
            <li>{cafeService}</li>
        </ul>
    ))
    return(
        <div>
            <img src={logo} alt="" />
            {header}
        </div>
          
)}
export default Header
