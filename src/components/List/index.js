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

    const getImage = (random) => {
        if(random)
        {
            //todo pull in fakerjs and grab random image
            return <Image src={props.src} size="" className="avatar"/>
        }
        else
        {
            return <Image src={props.src} size="" className="avatar"/>
        }
    }

    const renderItems = (items) => {
        return (
            items.forEach((item) => {
                return (
                    <div className="item" onClick={() => { if(props.onListItemClicked) { debugger; props.onListItemClicked(item);}}}>
                        {getImage(props.randomImage)}
                        <div className="content">
                            <div className="header">{item.title}</div>
                            {item.content}
                        </div>
                    </div>
                );
                
            })
        );
    }
    return (
        <div className="ui two column centered grid">
            <div className="column">
                <div className="ui middle aligned animated list">
                    {renderItems(props.items)}
                </div>
            </div>
        </div>
    );
    
}

export default List;