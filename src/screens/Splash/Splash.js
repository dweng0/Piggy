import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import queryString from 'query-string';

import logo from '../../logo.svg';
import './../Styles/App.css';

import starlingRestInterface from '../../serviceprovider/starlingbank/interface';
import Image from '../../components/Image/Image';
import content from '../../locale/default';

const splashContent = content.splash;
export default class Splash extends Component {

  componentDidMount = () => {
    debugger;
    const queryParams = queryString.parse(this.props.location.search)
    console.log(queryParams);
    if(queryParams.code)
    {
      starlingRestInterface('v1').authorize(queryParams).then(() => {
        debugger;
      });
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1 className="white text center" style={{marginTop:'20px'}}>{splashContent.welcome}</h1>
          <Link to="/accounts">
            <Image src={logo} size="large" className="animated pulse"/>
            <button className="massive basic teal ui button">{splashContent.subTitle}</button>
          </Link>
        </header>
      </div>
    );
  }
}