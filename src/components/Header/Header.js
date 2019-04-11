import React from 'react';
import { Link } from 'react-router-dom'
import content from '../../locale/default';

const headerContent = content.header;
/**
 * The Header component exists throughout the life time of the application and provides user details 
 */

export default class Header extends React.Component {
    render(){
        return (
            <div className="ui secondary pointing menu">
                <Link to="/" className="item">{headerContent.title}</Link>
                <div className="right menu">
                    <Link to="/accounts" className="item">
                        {headerContent.accountLinkLabel}
                    </Link>
                </div>
            </div>
        );
    }
}