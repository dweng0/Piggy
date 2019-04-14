import React from 'react';

import Image from '../Image';

const Details = (props) => {
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