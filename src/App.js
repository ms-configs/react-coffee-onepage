import React from 'react';
import Main from './components/main-nav/main';
import AboutCoffee from './components/about-coffee/about-cofee';
import Filter from './components/filters/filters';
import ItemsCoffee from './components/items-coffee/items-coffee';
import Footer from './components/footer/footer';
import { v4 as uuidv4 } from 'uuid';

let data = [
  { name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: 6.99, id: uuidv4() },
  { name: 'ARABICA Coffee 1 kg', country: 'Kenya', price: 6.99, id: uuidv4() },
  { name: 'NESPRESSO Coffee 1 kg', country: 'Columbia', price: 6.99, id: uuidv4() },
  { name: 'BLACK CARD Coffee 1 kg', country: 'Brazil', price: 6.99, id: uuidv4() },
  { name: 'BARISTA Coffee 1 kg', country: 'Brazil', price: 6.99, id: uuidv4() },
  { name: 'BOSTON DE Coffee 1 kg', country: 'Brazil', price: 6.99, id: uuidv4() },
]


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      textFilter: '',
      buttonFilter: 'all',
    }
  }

  setFilter = (e) => {
    let value = e.target.value;
    this.setState(() => ({
      textFilter: value,
    }))
  }

  setButtonFilter = (e) => {
    this.setState(() => ({
      buttonFilter: e.target.dataset.country
    }))
  } 


  FilterData() {
    return data.filter( item => item.name.toLowerCase().indexOf(this.state.textFilter) > -1)
  }

  FilterButtonsData(data) {
    switch(this.state.buttonFilter){
      case 'brazil': return data.filter( item => item.country.toLowerCase() == 'brazil');
      case 'columbia': return data.filter( item => item.country.toLowerCase() == 'columbia');
      case 'kenya': return data.filter( item => item.country.toLowerCase() == 'kenya');
      default: return data;
    }
  }

  render() {
    return (
      <div className="App">
        <Main />
        <AboutCoffee />
        <Filter setFilter={this.setFilter} setButtonFilter={this.setButtonFilter}/>
        <ItemsCoffee data={this.FilterButtonsData(this.FilterData())}  />
        <Footer />
      </div>
    );
  }
}

export default App;
