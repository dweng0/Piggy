import React from 'react';
import { Link } from 'react-router-dom';

import Image from '../../components/Image';

import image from '../../assets/images/404.svg';
import content from '../../locale/default';

const notFoundContent = content.noMatchedRoute;

const NoMatchedRoute = (props) => {
    return(
        <div className="App">
        <header className="App-header">
        <h1 className="white text center" style={{marginTop:'20px'}}>404</h1>
           
                <Image src={image} size="medium" className="circular"/>
                <p>{notFoundContent.missing}</p>
                <Link to="/">
                    <button className="massive teal ui button">{notFoundContent.returnButton}</button>
                </Link>
        </header>
        </div>
    );
}
export default NoMatchedRoute;


