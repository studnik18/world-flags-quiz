import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import FlagsMainContainer from './components/FlagsMainContainer.js';
import { flagData } from './data.js';
import SelectContinents from './components/SelectContinents.js';



class App extends Component {
  


    constructor(props) {
        super(props);

        this.state = {
            turn: 0,
            maxTurns: 0,
            score: 0,
            countriesArray: [],
            answerIndex: '',
            gameInProgress: false
        };

        this.startGame = this.startGame.bind(this);
        this.prepareCountriesArray = this.prepareCountriesArray.bind(this);

    }

    startGame() {

        let turns = document.getElementById('turns');

        this.setState({
            gameInProgress: true,
            maxTurns: turns[0].checked ? 5 : 10,
            countriesArray: this.prepareCountriesArray()
        });

    }

    prepareCountriesArray() {
        let continentsForm = document.getElementById('continents');
        let continentsFormArray = Array.prototype.slice.call(continentsForm.elements);
        let continentsNames = [];

        continentsFormArray.map(continent => {
            if (continent.checked) {
                continentsNames.push(continent.name);
            }
            return continentsNames;
        });

        let filterCountries = (country) => {
            return  country.continent === continentsNames[0] || country.continent === continentsNames[1] ||
                    country.continent === continentsNames[2] || country.continent === continentsNames[3] ||
                    country.continent === continentsNames[4] || country.continent === continentsNames[5]
        };

        return flagData.filter(filterCountries);
    }

    render() {
        console.log(this.state);
            return (
                <div>
                    <div className="App">
                        <div className="App-header">
                            <img src={logo} className="App-logo" alt="logo" />
                            <h2>Welcome to React</h2>
                        </div>
                        <p className="App-intro">
                        To get started, edit <code>src/App.js</code> and save to reload.
                        </p>
                    </div>
                    { this.state.gameInProgress ? <FlagsMainContainer /> : 
                        <SelectContinents handleClick={this.startGame}/> }
                
                
                </div>
        );
      }
  }

export default App;






























