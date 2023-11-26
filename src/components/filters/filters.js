import React from "react";
import { v4 as uuidv4 } from 'uuid';
import './filters.scss';


class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttons: [
                { dataCountry: 'all', key: uuidv4(), value: 'all', active: true },
                { dataCountry: 'brazil', key: uuidv4(), value: 'Brazil', active: false },
                { dataCountry: 'kenya', key: uuidv4(), value: 'Kenya', active: false },
                { dataCountry: 'columbia', key: uuidv4(), value: 'Columbia', active: false },
            ]
        }
    }

    toggleActive = (e) => {
        let index = this.state.buttons.findIndex(item => item.key == e.target.id);
        let items = this.state.buttons.map( (item, n) => {
            let boolean = index == n ? true : false;
            return {
                ...item,
                active: boolean,
            }
        })
        this.setState(() => ({
            buttons: items,
        }))
    }

    render() {
        let { setFilter, setButtonFilter } = this.props;
        let results = this.state.buttons.map(item => {
            let clazz = item.active ? 'buttonFilter active' : 'buttonFilter';
            return <button className={clazz} onClick={(e) => {setButtonFilter(e); this.toggleActive(e)}} data-country={item.dataCountry} id={item.key} key={item.key}>{item.value}</button>
        })
        return (
            <section className="section__filter">
                <form action="" onSubmit={(e) => e.preventDefault()}>
                    <label htmlFor="textFilter">Lookiing for <input id='textFilter' placeholder='start typing here...' onChange={setFilter} type="text" /></label>
                </form>
                <div>
                    <span>Or filter</span>
                    {results}
                </div>
            </section>
        )
    }
}

export default Filter;