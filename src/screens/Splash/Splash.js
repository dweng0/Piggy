import React, { Component } from 'react';
import logo from '../../logo.svg';
import './../Styles/App.css';
import ClickableImage from '../../components/ClickableImage/ClickableImage';

export default class Splash extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1 className="white text center">Welcome to Piggy</h1>
          <ClickableImage src={logo} link="/accounts" size="large"/>
          <a>Start saving</a>
        </header>
      </div>
    );
  }
}