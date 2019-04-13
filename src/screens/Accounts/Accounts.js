import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { roundUpAmountCalculated } from '../../actions';

import Details from '../../components/Details/Details';
import starling from '../../serviceprovider/starlingbank/interface';
import cardImage from '../../assets/images/accounts.svg';
import content from '../../locale/default';
const accountContent = content.accountContent;

class Accounts extends Component {
  state = {
    loading: true
  }

  renderDetails = () => {
    debugger;
    if(!this.props.saving)
    {
      return <Redirect to="/weekly"/>
    }
    else
    {
      return <Details cardImage={cardImage} title={accountContent.title} content={accountContent.content} />
    }
  }

  async componentDidMount() {
    const response = await starling().accounts();

    if(response.status === 200)
    {
      
    }
    else
    {
      debugger;
    }
  }
  
  render() {
    return (
      <div>
        {this.renderDetails()}
       
               
        </div>

    );
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(Accounts);