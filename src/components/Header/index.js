import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

import content from '../../locale/default';
import starling from '../../serviceprovider/starlingbank';

const headerContent = content.header;
/**
 * The Header component sits at the top of the application and connects to the service to get the users' name
 */
class Header extends React.Component {
    state = {
        loadingName:true,
        errorMessage: "",
        errors: false
    }

    /*
    * Set the name content area based on state
    * only show the amount that can be saved if ths saving exists and is greater than 0
    */
    setNameContentArea = () => {
        if(this.state.errors)
        {
            return <button className="item"><i className="exclamation circle icon"></i>{headerContent.failedToConnect}</button>
        }
        else if(this.state.loadingName)
        {
            return (
                <button className="item">
                    <div className="small ui active inline loader"></div>
                </button>
            );
        }
        else
        {
            let wording = `Hey ${this.state.name}`;
            if(this.props.saving && this.props.saving.amount > 0 && !starling().hasCookie())
            {
                wording += `, lets save ${this.props.saving.label}`;
            }
           return (
            <a id="username" className="item" href="/">{wording}</a>
           );
        }
    }

    /**
    * Identify user by calling the api wrapper
    */
    componentDidMount() {
        starling().identify()
                .then((response) => {
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
                })
                .catch((error) => {
                      this.setState({
                          errors: true,
                          errorMessage: error.message
                      });
                });
    }
    render(){
        return (
            <div className="ui secondary pointing menu">
                <Link to="/" className="item">{headerContent.title}</Link>
                <div className="right menu">
                    {this.setNameContentArea()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(Header);