import React, {Component} from 'react';
import Header from './Components/Header';
import FightDisplay from './Components/FightDisplay';
import SelectBrawlrHeader from './Components/SelectBrawlrHeader';
import SelectBrawlrDisplay from './Components/SelectBrawlrDisplay';
import Footer from './Components/Footer';
import './App.css';



export default class App extends Component {
    
  render() {
    return (
      <div className="App">
        <Header />
        <FightDisplay />
        <SelectBrawlrHeader/>
        <SelectBrawlrDisplay />
        <Footer />
      </div>
    )
  }
}
