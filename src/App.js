import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import FlagsMainContainer from './components/FlagsMainContainer.js';
import { flagData } from './data.js';
import SelectContinents from './components/SelectContinents.js';
import ScoreBox from './components/ScoreBox.js'



class App extends Component {
  


    constructor(props) {
        super(props);

        this.state = {
            turn: 0,
            maxTurns: 0,
            score: 0,
            countriesArray: 'loading',
            gameInProgress: false,
            messageShown: false,
            gameFinished: false
        };

        this.startGame = this.startGame.bind(this);
        this.prepareCountriesArray = this.prepareCountriesArray.bind(this);
        this.updateCountries = this.updateCountries.bind(this);
        this.getWrongAnswerIndexes = this.getWrongAnswerIndexes.bind(this);
        this.manageData = this.manageData.bind(this);
        this.handleAnswer = this.handleAnswer.bind(this);
        this.nextClick = this.nextClick.bind(this);

    }


    componentDidMount() {
        this.setState({
            countriesArray: this.prepareCountriesArray()
        })
    }

    startGame() {

        let turns = document.getElementById('turns');
        this.setState({
            gameInProgress: true,
            maxTurns: turns[0].checked ? 5 : 10
        });

        this.manageData();        
    }

    manageData() {
        let index = Math.floor(Math.random() * this.state.countriesArray.length);
        let countriesArray = this.state.countriesArray;
        let shuffleArray = (array) => {
            for (let i = array.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        };

        countriesArray.splice(index, 1);
        this.setState({
            countriesArray,
            selectedCountry: countriesArray[index]
        });
        let wrongAnswers = this.getWrongAnswerIndexes().map(item =>
            countriesArray[item].name);
        this.setState({
            answers: shuffleArray([countriesArray[index].name, ...wrongAnswers])
        });
    }

    nextClick() {
        if (this.state.maxTurns - this.state.turn > 0) {
            Array.prototype.slice.call(document.querySelectorAll('#answersButtons button')).map(button =>
                button.style.backgroundColor = 'buttonface');
            this.setState({
                messageShown: false,
                correct: ''
            });
            this.manageData();
        } else {
            this.setState({
                gameFinished: true
            })
        }
    }
    
    updateCountries() {
        this.setState({
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

    getWrongAnswerIndexes() {
        let numberOne = Math.floor(Math.random() * this.state.countriesArray.length);
        let numberTwo;
            do {
                numberTwo = Math.floor(Math.random() * this.state.countriesArray.length);
            } while (numberOne === numberTwo);
            return [numberOne, numberTwo];
    };

    handleAnswer(e) {   
        document.querySelector('.correct').style.backgroundColor = '#26F539';
        if (e.target.classList[0] !== 'correct') {
            e.target.style.backgroundColor = '#E14545';
        } else {
            this.setState({
                score: this.state.score + 1,
                correct: true
            })
        }
        this.setState({
            turn: this.state.turn + 1,
            messageShown: true
        });
    }

    render() {

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
                    { 
                        this.state.gameFinished ? <ScoreBox score={this.state.score} maxTurns={this.state.maxTurns}/> :


                        this.state.gameInProgress && this.state.countriesArray.length > 0 

                        ? <FlagsMainContainer country={this.state.selectedCountry} score={this.state.score}
                        turnsLeft={this.state.maxTurns - this.state.turn} answers={this.state.answers} correct={this.state.correct}
                        handleAnswer={this.handleAnswer} messageShown={this.state.messageShown} manageNext={this.nextClick}/>

                        : <SelectContinents handleStart={this.startGame} countries={this.state.countriesArray.length}
                        handleCheck={this.updateCountries}/> }
                
                
                </div>
        );
      }
  }

export default App;






























