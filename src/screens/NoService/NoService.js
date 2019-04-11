import React from 'react';
import ClickableImage from '../../components/ClickableImage/ClickableImage';

import image from '../../assets/images/404.svg';

const NoService = (props) => {
    return(<div className="ui icon message">
        <ClickableImage src={image} size="tiny" className="circular"/>
        <div className="content">
            <div className="header">
            Have you heard about our mailing list?
            </div>
            <p>Get the best news in your e-mail every day.</p>
        </div>
    </div>);
}
export default NoService;

