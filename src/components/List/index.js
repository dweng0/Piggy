import React from 'react';
import _ from 'underscore';

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
                <div key={index} className="item" onClick={() => { if(props.onListItemClicked) { debugger; props.onListItemClicked(item);}}}>
                    <div className="content">
                        <div className="header">{item.title}</div>
                        {item.content}
                    </div>
                </div>
            );
        });
    }
    return (
        <div>
            {renderItems(props.items)}
        </div>
    );
    
}

export default List;