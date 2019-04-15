import React from 'react';
import Image from '../Image';
import _ from 'underscore';

const Details = (props) => {
    let errors = [];
    if(!props.title)
    {
        errors.push("No title provided");
    }

    if(!props.content)
    {
        errors.push("No content provided");
    }

    if(!props.cardImage)
    {
        errors.push("No image provided");
    }

    if(!_.isEmpty(errors))
    {
        throw new Error(errors.reduce((prev, current) => {return prev + ", " + current}));
    }

    return (
        <div>
            <div className="ui">
                <Image src={props.cardImage} size="small" className="centered"/>
            </div>
            <h2 className="ui icon center aligned header">
            <div className="content">{props.title}</div>
            </h2>
            <div className="ui two column centered grid">
                <div className="ui center aligned">
                    <p className="center aligned">{props.content}</p>
                </div>
            </div>
        </div>
    );
}

export default Details;