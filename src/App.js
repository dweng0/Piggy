import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1 cassName="white text center">Piggy</h1>
          <img src={logo} className="animated pulse piggy" alt="logo" />
          <a>Start saving</a>
        </header>
      </div>
    );
  }
}

export default App;
