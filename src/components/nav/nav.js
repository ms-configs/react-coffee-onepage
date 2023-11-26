import React from "react";
import './nav.scss';


function Nav() {
    return (
        <ul className="nav__items">
            <li><a href="#" className="nav__item">Coffee house</a></li>
            <li><a href="#" className="nav__item">Our cofee</a></li>
            <li><a href="#" className="nav__item">For your pleasure</a></li>
        </ul>
    )
}

export default Nav;