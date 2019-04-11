import React, { Component } from 'react';
import axios from 'axios';

import ClickableImage from '../../components/ClickableImage/ClickableImage';
import cardImage from '../../assets/images/accounts.svg'
//https://tylermcginnis.com/react-router-url-parameters/
export default class Accounts extends Component {
  state = {
    loading: true
  }
  render() {
    return (
      <div>
        <div className="ui">
             <ClickableImage src={cardImage} size="small" className="centered"/>
        </div>
        <h2 className="ui icon center aligned header">
          <div className="content">Your Accounts</div>
        </h2>
        <div className="ui two column centered grid">
            <div className="ui center aligned">
                <p className="center aligned">You're only a few steps away from stashing away that loose change</p>
            </div>
        </div>
                <div className="ui two column centered grid">
                    <div className="column">
                    <div className="ui middle aligned animated list">
                    <div className="item">
                        <ClickableImage src={cardImage} size="" className="avatar"/>

                        <div className="content">
                        <div className="header">Current Account</div>
                        </div>
                    </div>
                    <div className="item">
                        <ClickableImage src={cardImage} size="" className="avatar"/>
                        <div className="content">
                        <div className="header">Savings Account</div>
                        </div>
                    </div>
                    <div className="item">
                        <ClickableImage src={cardImage} size="" className="avatar"/>
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