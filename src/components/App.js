import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import PersonajesList from './PersonajesList';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      personajes: [],
      url:''
    }
  }
  componentWillMount(){
    console.log(this.state.personajes);
  }

  componentDidMount(){
    fetch('https://cors-anywhere.herokuapp.com/https://swapi.co/api/people')
      .then((response) => {
        return response.json()
      })
      .then((items) => {
        this.setState({
          personajes: items.results
        })
      })
  }

  render() {

      if (this.state.personajes.length > 0) {
        return (  <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Swapi cool</h1>
          </header>
          <div>
            <PersonajesList listado={this.state.personajes} />
          </div>
        </div>);
      } else {
        return (  <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Swapi cool</h1>
          </header>
          <p>Cargando información de la API...</p>
        </div>);
      }

  }
}

export default App;
