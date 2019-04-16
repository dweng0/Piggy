import React from 'react';
import _ from 'underscore';

import Image from '../Image';
import starling from '../../serviceprovider/starlingbank';

import '../../index.css';

export default class Card extends React.Component {
    state = {
        imageLoaded: false,
        initializingImage: false,
        hasImage: true
    }

    constructor(props) {
        super(props);

        let errors = [];
        if(!props.item)
        {
            errors.push("No item provided for card");
        }
        else 
        {
            if (!props.item.content)
            {
                errors.push("No content provided for card");
            }
            if (!props.item.title)
            {
                errors.push("No title provided for card");
            }
            if(!props.item.onListItemClicked)
            {
                errors.push("onListItemClicked is required");
            }
            if(!props.item.uid)
            {
                errors.push("Unique identifying key required for click events");
            }
            if(!props.item.addItemText)
            {
                errors.push("Add item text is required");
            }
        }

        if(!_.isEmpty(errors))
        {
            throw new Error(errors.reduce((prev, current) => {return prev + ", " + current}));
        }
    }

    componentDidMount() {
        starling().getSavingPhoto(this.props.item.accountuid, this.props.item.uid)
            .then(response => {
                debugger;
                this.setState({
                    image64: response.data.base64EncodedPhoto,
                    imageLoaded: true
                })
            })
            .catch(err => {
                this.setState({
                    hasImage: false
                });
                console.warn(err);
            });
    }

    renderImage = () => {
        if(this.state.imageLoaded)
        {
            return <Image src={this.state.image64} size="medium" base64="true" />
        }
        else if(!this.state.hasImage)
        {
            return(
                <div className="ui placeholder no-animation">
                    <div className="square image"></div>
                </div>
           );
        }
        else
        {
            return(
                <div className="ui placeholder">
                    <div className="square image"></div>
                </div>
           );
        }
    }

    render() {
        return(
            <div key={this.props.item.key} className="card" onClick={() => { if(this.props.item.onListItemClicked) {this.props.item.onListItemClicked(this.props.item.uid);}}}>
                <div className="card">
                    { this.renderImage() }
                </div>
                <div className="content">
                    <div className="header">{this.props.item.title}</div>
                    <div className="description">
                        {this.props.item.content}
                    </div>
                </div>
                <div className="ui bottom attached button">
                    <i className="add icon"></i>
                    {this.props.item.addItemText}
                </div>
            </div>
        );
    }
}
