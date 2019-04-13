import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

import content from '../../locale/default';
import starling from '../../serviceprovider/starlingbank/interface';

const headerContent = content.header;
/**
 * The Header component exists throughout the life time of the application and provides user details
 */
class Header extends React.Component {
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
            let wording = `Hey ${this.state.name}`;
            if(this.props.saving)
            {
                wording += `, lets save ${this.props.saving.label}`;
            }
           return (
            <a className="item" href="/">{wording}</a>
           );
        }
    }

    componentDidMount() {
        starling().identify()
                .then((response) => {
                    if(response.status === 200)
                    {  alert(1);
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
                    {this.setUserNameOrError()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    //amount: state.
    return state;
}

export default connect(mapStateToProps)(Header);