import React from "react";
import cafeServices from "../utile/CafeService";
import logo from "../images/Sans titre.png"

function NavBar() { 
    const header = cafeServices.map((cafeService) =>(
        <ul>
            <li><a href="#">{cafeService}</a></li>
        </ul>
    ))
    return(
        <div className="contenair-navbar">
            <div>
                <img className="logo" src={logo} alt="" />
            </div>
            <div className="nav-header">
               {header}
            </div>

        </div>
          
)}
export default NavBar
