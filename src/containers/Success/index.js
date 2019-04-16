import React, { Component } from 'react';

import starling from '../../serviceprovider/starlingbank';
import Image from '../../components/Image';
import successImage from '../../assets/images/success.jpg';
import content from '../../locale/default';
import '../Splash/splash.css';
const successContent = content.success;

export default class Success extends Component {
  constructor(props) {
    super(props);
    if(!starling().hasCookie())
    {
      starling().setCookie();
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1 className="white text center" style={{marginTop:'20px'}}>{successContent.welcome}</h1>
           
                <Image src={successImage} size="large" className="bounce"/>
                <p>{successContent.subTitle}</p>
                <a className="massive teal ui button" href="https://www.starlingbank.com/">
                    {successContent.button}
                </a>
        </header>
      </div>
    );
  }
}