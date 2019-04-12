import React, { Component } from 'react';
import axios from 'axios';

import Details from '../../components/Details/Details';
import Image from '../../components/Image/Image';
import cardImage from '../../assets/images/accounts.svg';
import content from '../../locale/default';

const accountContent = content.accountContent;
//https://tylermcginnis.com/react-router-url-parameters/
export default class Accounts extends Component {
  state = {
    loading: true
  }
  render() {
    return (
      <div>
        <Details cardImage={cardImage} title={accountContent.title} content={accountContent.content} />
               
        </div>

    );
  }
}