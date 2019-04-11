import React from 'react';
import content from '../../locale/default';

const headerContent = content.header;
/**
 * The Header component exists throughout the life time of the application and provides user details 
 */
export default class Header extends React.Component {
    render(){
        return (
            <div>{headerContent.greet}</div>
        );
    }
}