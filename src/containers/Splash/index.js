import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import logo from '../../logo.svg';
import Image from '../../components/Image';
import content from '../../locale/default';
import starling from '../../serviceprovider/starlingbank';

// @ts-ignore
// eslint-disable-next-line no-unused-vars
import './splash.css';

const splashContent = content.splash;

/**
*  Home screen
*/
export default class Splash extends Component {
  renderSubSection = () => {
    if(starling().hasCookie())
    {
      return(
        <div>
            <div>
              <p>{splashContent.alreadySaved}</p>
            </div>
            <Image src={logo} size="large" className="ui image bounce forever"/>
        </div>
        
        
      );
    }
    else
    {
      return (
        <div>
          <p>{splashContent.description}</p>
          <Link to="/weekly">
              <Image src={logo} size="large" className="ui image animated pulse"/>
              <button className="massive basic teal ui button">{splashContent.subTitle}</button>
          </Link>
        </div>
      );
    }

    
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1 className="white text center" style={{marginTop:'10px'}}>{splashContent.welcome}</h1>
          {this.renderSubSection()}
        </header>
      </div>
    );
  }
}