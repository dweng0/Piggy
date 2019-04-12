import React from 'react';
import Image from '../../components/Image/Image';

import image from '../../assets/images/404.svg';

const NoService = (props) => {
    return(<div className="ui icon message">
        <Image src={image} size="tiny" className="circular"/>
        <div className="content">
            <div className="header">
            Have you heard about our mailing list?
            </div>
            <p>Get the best news in your e-mail every day.</p>
        </div>
    </div>);
}
export default NoService;

