import React from "react";
import './items-coffee.scss';
import CoffeeImg from '../../images/ItemLogo.png';


class ItemsCoffee extends React.Component {



    render() {
        let results = this.props.data.map(item => {
            return (
                <li className="section__item" key={item.id}>
                    <img src={CoffeeImg} alt="logo of item" />
                    <p>{item.name}</p>
                    <span>{item.country}</span>
                    <span>{item.price}$</span>
                </li>
            )
        })


        return (
            <section className="section__items_wrapper">
                <div className="section__items_inner">
                    <ul className="section__items">
                        {results}
                    </ul>
                </div>
            </section>

        )
    }
}


export default ItemsCoffee;