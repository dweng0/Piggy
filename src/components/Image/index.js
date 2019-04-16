import React from 'react';
import _ from 'underscore';
import { ImageGroup } from 'semantic-ui-react';
/**
 * Render image component for other components and the application in general
 * @returns {class}
 */
export default class ImageComponent extends React.Component {

    state = {
        imageSource: ""
    }
    constructor(props) {
        super(props);
        let errors = [];

        if(!props.src)
        {
            errors.push("No src property provided, the image requires a source to render");
        }

        if(errors.length > 0)
        {
            throw new Error(errors.reduce((prev, current) => {return prev + ", " + current}));
        }

        this.state.imageSource = this.props.src;

        if(this.props.base64)
        {
            debugger;
            // server saves just the base64 type (not data URI), so have to try and find the correct datatype on the frontend
           const findCorrectImageDataType = (base64Part) => {
                return  new Promise((resolve, reject) => {
                    debugger;
                    const acceptableDataTypes = ['image/png', 'image/jpg', 'image/jpeg', 'image/svg'];
                    let imagesToLoad = acceptableDataTypes.length;
                    const imageLoadsCorrectly = (src) => {
                        let image = new Image();
                        image.src = src;
                        image.onload = () => {
                            if(image.complete && image.naturalHeight !== 0)
                            {
                               return resolve(src);
                            }
                            imagesToLoad--;
                            if(imagesToLoad === 0)
                            {
                                return reject("No acceptable data types found found");
                            }
                        }
                    }
                    _.each(acceptableDataTypes, function(type) {
                        imageLoadsCorrectly(`data:${type};base64,${base64Part}`);
                    });
                });
           }
           findCorrectImageDataType(this.props.src)
            .then(src => {
                this.state.imageSource = src;
            })
            .catch(err => {
                console.log(err);
            })
        }
    }
    getCss = () => {
        return "ui image " + this.props.className + " " + this.props.size;
    }
    render(){
        return (
            <img alt="" src={this.state.imageSource} className={this.getCss()} style={{margin: 'auto'}} />
        );
    }
}