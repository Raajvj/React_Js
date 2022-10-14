import React from "react";
import './nav.scss';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import { Menu } from "../menu/menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown, faHome, faPerson, faPersonRifle, faSearch, faTag } from "@fortawesome/free-solid-svg-icons";

export function Nav(){
    return(
        <div>
            <Menu/>
            <div className="">
                <div className="nav_div1 row">
                    <div className="rounded">
                        <ul>
                            <li><FontAwesomeIcon icon={faHome}/> Home</li>
                            <li ><FontAwesomeIcon icon={faSearch}/> Search</li>
                            <li><FontAwesomeIcon icon={faCartArrowDown}/> Order</li>
                            <li><FontAwesomeIcon icon={faTag}/> Offer</li>
                            <li><FontAwesomeIcon icon={faPerson}/> Profile</li>
                        </ul>
                    </div>
                        <div className="card text-center col-lg-3 bg-primary text-white ml-3 nav_div1_card ">
                                <p>Get HTML color codes, Hex color codes, RGB and HSL values with our color picker, color chart and HTML color names. Let's go! Get HTML color codes, Hex color codes, RGB and HSL values with our color picker, color chart and HTML color names. Let's go! Get HTML color codes, Hex color codes, RGB and HSL values with our color picker, color chart and HTML color names. Let's go! Get HTML color codes, Hex color codes, RGB and HSL values with our color picker, color chart and HTML color names. Let's go!</p>
                        </div>
                        <div className="card text-center col-lg-3 bg-primary text-white ml-3 nav_div1_card">
                                <p>Get HTML color codes, Hex color codes, RGB and HSL values with our color picker, color chart and HTML color names. Let's go! Get HTML color codes, Hex color codes, RGB and HSL values with our color picker, color chart and HTML color names. Let's go! Get HTML color codes, Hex color codes, RGB and HSL values with our color picker, color chart and HTML color names. Let's go! Get HTML color codes, Hex color codes, RGB and HSL values with our color picker, color chart and HTML color names. Let's go!</p>
                        </div>
                        <div className="card text-center col-lg-3 bg-primary text-white ml-3 nav_div1_card">
                                <p>Get HTML color codes, Hex color codes, RGB and HSL values with our color picker, color chart and HTML color names. Let's go! Get HTML color codes, Hex color codes, RGB and HSL values with our color picker, color chart and HTML color names. Let's go! Get HTML color codes, Hex color codes, RGB and HSL values with our color picker, color chart and HTML color names. Let's go!Get HTML color codes, Hex color codes, RGB and HSL values with our color picker, color chart and HTML color names. Let's go!</p>
                        </div>
                 </div> 
            </div>
       </div>
    );
}