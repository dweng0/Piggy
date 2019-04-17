import React from 'react';
import _ from 'underscore';

const ACCEPTABLE_DATA_TYPES = ['image/png', 'image/jpg', 'image/jpeg', 'image/svg'];

/**
 * Render image component for other components and the application in general.
 * Will attempt to load a raw base64 string as an image using common acceptable datatypes
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
    }

    componentDidMount = () => {
        if(this.props.base64)
        {
            /**
             * Server saves only the base64 part of an image, this code attemps to add the data part to create a data URI string for use in displaying images
             * loop over the array of data types, create a dataURI with the base64 and dataURI,
             * create an image, check if it successfully loads, resolve, otherwise decrement the count and try the next data type. if the decrement counter reaches zero, reject
             * @param {string} base64Part
             */
           const findCorrectImageDataType = (base64Part) => {
                return  new Promise((resolve, reject) => {
                    
                    let imagesToLoad = ACCEPTABLE_DATA_TYPES.length;
                    const imageLoadsCorrectly = (src) => {
                        let image = new Image();
                        image.src = src;
                        image.onload = () => {
                            if(image.complete && image.naturalHeight !== 0)
                            {
                               return resolve(src);
                            }
                            else
                            {
                                imagesToLoad--;
                            }
                            if(imagesToLoad === 0)
                            {
                                return reject("No acceptable data types found");
                            }
                        }
                    }
                    _.each(ACCEPTABLE_DATA_TYPES, function(type) {
                        imageLoadsCorrectly(`data:${type};base64,${base64Part}`);
                    });
                });
           }
           findCorrectImageDataType(this.props.src)
            .then(src => {
                this.setState({
                    imageSource: src
                });
            })
            .catch(err => {
                console.warn(err);
                this.setState({
                    imageSource: '../../assets/images/noImage'
                });
            })
        }
    }

    /**
     * Apply external css where applicable
     */
    getCss = () => {
        let imageCss = "";
        if(this.props.className)
        {
            imageCss += " " + this.props.className;
        }

        if(this.props.size)
        {
            imageCss += " " + this.props.size;
        }
        return imageCss;
    }

    /**
     * Apply external style, where applicable
     */
    getStyle = (style) => {
        let defaultStyle = {
            margin: 'auto'
        };

        return _.extend(defaultStyle, style);
    }

    render() {
        return (
            <img alt="" src={this.state.imageSource} className={this.getCss()} style={this.getStyle(this.props.style)} />
        );
    }
}