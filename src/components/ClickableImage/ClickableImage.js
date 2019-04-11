import React from 'react';
import { Image } from 'semantic-ui-react';
import {Link} from 'react-router-dom'


/**
 * Clickable image component used by Splash and success to provide a clickable image
 * @returns {class}
 */
export default class ClickableImage extends React.Component {
    constructor(props) {
        super(props);
        let errors = [];

        if(!props.src)
        {
            errors.push("No src property provided, the image requires a source to render");
        }

        if(!props.link)
        {
            errors.push("No link was provided, this component requires a link");
        }
        if(errors.length > 0)
        {
            throw new Error(errors.reduce((prev, current) => {return prev + ", " + current}));
        }
    }

    /**
     * Returns all the classes used by the image, including the size defined by the user
     */
    getClassForLink = () => {
        return "ui image animated pulse " + this.props.size;
    }
    render(){
        return (
        <Link className={this.getClassForLink()} to={this.props.link}><img src={this.props.src} /></Link>
        );
    }
}