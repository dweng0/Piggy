import React from 'react';
import { Button } from 'semantic-ui-react';

/**
 * The Header component exists throughout the life time of the application and provides user details 
 */
class Header extends React.Component {
    render(){
        return (
            <div>
                <Button primary>Primary</Button>
                <Button secondary>Secondary</Button>
            </div>
        );
    }
}

export default Header;