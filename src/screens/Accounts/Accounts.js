import React, { Component } from 'react';
import axios from 'axios';

import Details from '../../components/Details/Details';
import Image from '../../components/Image/Image';
import cardImage from '../../assets/images/accounts.svg';

const accountContent = {
    title: "Your accounts",
    content: "You're only a few steps away from stashing away that loose change"
}
//https://tylermcginnis.com/react-router-url-parameters/
export default class Accounts extends Component {
  state = {
    loading: true
  }
  render() {
    return (
      <div>
        <Details cardImage={cardImage} title={accountContent.title} content={accountContent.content} />
                <div className="ui two column centered grid">
                    <div className="column">
                    <div className="ui middle aligned animated list">
                    <div className="item">
                        <Image src={cardImage} size="" className="avatar"/>

                        <div className="content">
                        <div className="header">Current Account</div>
                        </div>
                    </div>
                    <div className="item">
                        <Image src={cardImage} size="" className="avatar"/>
                        <div className="content">
                        <div className="header">Savings Account</div>
                        </div>
                    </div>
                    <div className="item">
                        <Image src={cardImage} size="" className="avatar"/>
                        <div className="content">
                        <div className="header">ISA</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

    );
  }
}