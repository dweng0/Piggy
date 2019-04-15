import React from 'react';

import Image from '../Image';

/**
* Display a nice list for our application, the array should contain:
* the array item should be {title, content, src, randomImage}
* @param {Object} props contains array of items to Display
*
*/
const List = (props) => {
    debugger;
    if(!props.items || !props.items.length)
    {
        throw new Error("items need to be provided as a prop");
    }

    const renderItems = (items) => {
        return items.map((item) => {
                return (
                    <div className="item" onClick={() => { if(props.onListItemClicked) { debugger; props.onListItemClicked(item);}}}>
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