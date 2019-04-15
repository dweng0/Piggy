import React from 'react';
import _ from 'underscore';
import faker from 'faker';

import Image from '../../components/Image';

/**
* Display a nice list for our application, the array should contain:
* the array item should be {title, content, src, randomImage}
* @param {Object} props contains array of items to Display
*
*/
const List = (props) => {
    
    if(!props.items || !_.isArray(props.items) || _.isEmpty(props.items))
    {
        throw new Error("items need to be provided as a prop");
    }

    const renderItems = (items) => {
        return items.map((item, index) => {
            return (
                <div key={index} className="card" onClick={() => { if(props.onListItemClicked) {props.onListItemClicked(item);}}}>
                    <div className="card">
                    </div>
                    <div className="content">
                        <div className="header">{item.title}</div>
                        <div className="description">
                            {item.content}
                        </div>
                    </div>
                </div>
            );
        });
    }
    return (
        <div className="ui link cards" style={{'paddingTop': '35px'}}>
            {renderItems(props.items)}
        </div>
    );
    
}

export default List;
