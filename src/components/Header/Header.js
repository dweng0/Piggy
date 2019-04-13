import React from 'react';
import { Link } from 'react-router-dom'

import starlingRestInterface from '../../serviceprovider/starlingbank/interface';
import content from '../../locale/default';
import axios from 'axios';

const headerContent = content.header;
/**
 * The Header component exists throughout the life time of the application and provides user details
 */
export default class Header extends React.Component {
    state = {
        loadingName:true,
        errorMessage: ""
    }

    constructor(props) {
        super(props);

        const onError = (error) => {
            this.setState({errorMessage: error.message});
        }

        const onSuccess = (response) => {
            if(response.status = 200)
            //response.data.results
            this.props.name = response.firstName + ' ' + response.lastName;
            this.setState({loadingName: false});
        }
        axios.get('/api/v1/transactions', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer Mz771awWpCZfDbBGR99MYc81RSNXvnG0wbBUN4faJ5tigdnBxe0NpBKpdj0iXeKF'
              },
              withCredentials: true,
              
              
        })
            .then(onSuccess)
            .catch(onError)
    }

    /**
     * Basically handle all the different states while we wait for a response
     */
    setUserNameOrError = () => {
        if(this.state.errorMessage)
        {
            return <a className="item"><i className="exclamation circle icon"></i>{headerContent.failedToConnect}</a>
        }
        else if(this.state.loadingName)
        {
            return (
                <div className="small ui active inline loader"></div>
            );
        }
        else
        {
           return (
            <a className="ui blue image label">
                <img src="/images/avatar/small/veronika.jpg"/>
                {this.props.name}
            </a>
           );
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