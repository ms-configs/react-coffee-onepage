import React from "react";
import Nav from "../nav/nav";
import './main.scss';

class Main extends React.Component{

    render() {
        return (
            <header className="header">
                <nav className='header__nav'>
                   <Nav />
                </nav>
                <h1 className="header__line">Our Coffee</h1>

            </header>
        )
    }
}


export default Main