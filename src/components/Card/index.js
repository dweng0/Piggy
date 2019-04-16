import React from 'react';
import _ from 'underscore';

import Image from '../Image';
import Loading from '../Loading';
import starling from '../../serviceprovider/starlingbank';

export default class Card extends React.Component {
    state = {
        imageLoaded: false,
        initializingImage: false
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
            if (!props.content)
            {
                errors.push("No content provided for card");
            }
            if (!props.title)
            {
                errors.push("No title provided for card");
            }
            if(!props.onListItemClicked)
            {
                errors.push("onListItemClicked is required");
            }
            if(!props.uid)
            {
                errors.push("Unique identifying key required for click events");
            }
            if(!props.addItemText)
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
        starling().getSavingPhoto()
            .then()
            .catch();
    }

    renderImage = () => {
        if(this.state.imageLoaded)
        {
            //if the image is loaded
        }
        else if(this.state.hasImage)
        {
            //if we got a response from the server but there is no image
        }
        else
        {
            return <Loading />
        }
    }

    render() {
        return(
            <div key={this.props.key} className="card" onClick={() => { if(this.props.onListItemClicked) {this.props.onListItemClicked(this.props.uid);}}}>
                <div className="card">
                    { this.renderImage() }
                </div>
                <div className="content">
                    <div className="header">{this.props.title}</div>
                    <div className="description">
                        {this.props.content}
                    </div>
                </div>
                <div className="ui bottom attached button">
                    <i className="add icon"></i>
                    {this.props.addItemText}
                </div>
            </div>
        );
    }
}
