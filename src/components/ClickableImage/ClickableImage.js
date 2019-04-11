import React from 'react';
/**
 * Clickable image component for application
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
    getCss = () => {
        return "animated pulse ui image " + this.props.className + " " + this.props.size;
    }
    render(){
        return (
            <img alt="" src={this.props.src} className={this.getCss()} />
        );
    }
}