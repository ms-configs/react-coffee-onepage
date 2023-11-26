import React from "react";
import CoffeeBeanLogo from "../coffee-bean-logo/coffee-bean-logo";
import './about-coffee.scss';
import Girl from '../../images/Girl.jpg';


class AboutCoffee extends React.Component {

    render() {
        return (
            <section >
                <div className="section">
                    <div className="section__photo"><img src={Girl} alt="girl with cofee" /></div>
                    <aside className="section__about">
                        <h2 className="section__beans">About our beans</h2>      
                        <CoffeeBeanLogo />  
                        <div className="section__text">
                            <p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.</p>

                            <p>Afraid at highly months do things on at. Situation recommend objection do intention <br></br>
                                so questions.</p>

                            <p>As greatly removed calling pleased improve an.<br></br> Last ask him cold feel<br></br>
                                met spot shy want. Children me laughing we<br></br> prospect answered followed. At it went<br></br>
                                is song that held help face.</p></div>

                    </aside>
                </div>
                <hr></hr>
            </section>
        )
    }
}


export default AboutCoffee