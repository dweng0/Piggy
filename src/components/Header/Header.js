import React from 'react';
import { Link } from 'react-router-dom'

import content from '../../locale/default';
import starling from '../../serviceprovider/starlingbank/interface';

const headerContent = content.header;
/**
 * The Header component exists throughout the life time of the application and provides user details
 */
export default class Header extends React.Component {
    state = {
        loadingName:true,
        errorMessage: "",
        errors: false
    }

    /**
     * Basically handle all the different states while we wait for a response
     */
    setUserNameOrError = () => {
        if(this.state.errors)
        {
            return <a className="item"><i className="exclamation circle icon"></i>{headerContent.failedToConnect}</a>
        }
        else if(this.state.loadingName)
        {
            return (
                <a className="item">
                    <div className="small ui active inline loader"></div>
                </a>
            );
        }
        else
        {
           return (
            <a className="item" href="/">Hey {this.state.name}</a>
           );
        }
    }

    async componentDidMount() {
        const response = await starling().identify();
        if(response.status === 200)
        {
            this.setState({ 
                name: response.data.firstName + ' ' + response.data.lastName,
                loadingName: false
            }) 
        }
        else
        {
            this.setState({errors: true});
        }
    }
    render(){
        return (
            <div className="ui secondary pointing menu">                
                <Link to="/" className="item">{headerContent.title}</Link>
                <div className="right menu">
                    {this.setUserNameOrError()}
                    <Link to="/accounts" className="item">
                        <button className="small teal ui button">
                            {headerContent.accountLinkLabel}
                        </button>
                    </Link>
                </div>
            </div>
        );
    }
}