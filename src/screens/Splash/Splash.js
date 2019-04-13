import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import logo from '../../logo.svg';
import './../Styles/App.css';
import Image from '../../components/Image/Image';
import content from '../../locale/default';

const splashContent = content.splash;
export default class Splash extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1 className="white text center" style={{marginTop:'20px'}}>{splashContent.welcome}</h1>
          <Link to="/weekly">
            <Image src={logo} size="large" className="animated pulse"/>
            <button className="massive basic teal ui button">{splashContent.subTitle}</button>
          </Link>
        </header>
      </div>
    );
  }
}