import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import logo from '../../logo.svg';
import './../Styles/App.css';

import ClickableImage from '../../components/ClickableImage/ClickableImage';
import content from '../../locale/default';

const splashContent = content.splash;
export default class Splash extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1 className="white text center" style={{marginTop:'20px'}}>{splashContent.welcome}</h1>
          <Link to="/accounts">
            <ClickableImage src={logo} link="/accounts" size="large" className="circular"/>
            <button className="massive blue ui button">{splashContent.subTitle}</button>
          </Link>
        </header>
      </div>
    );
  }
}