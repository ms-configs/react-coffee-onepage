import React from "react";
import Nav from "../nav/nav";
import CoffeeBeanLogo from "../coffee-bean-logo/coffee-bean-logo";
import './footer.scss';


class Footer extends React.Component{

    render() {
        return (
            <footer className="footer">
                <div className="footer__inner">
                    <Nav />
                </div>
                    <CoffeeBeanLogo />
            </footer>
        )
    }
}


export default Footer;
