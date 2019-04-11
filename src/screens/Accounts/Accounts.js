import React, { Component } from 'react';
import axios from 'axios';

//https://tylermcginnis.com/react-router-url-parameters/
export default class Accounts extends Component {
  state = {
    loading: true
  }
  render() {
    return (
      <div>
        <h2 className="ui icon center aligned header">
          <i aria-hidden="true" className="users circular icon"></i>
          <div className="content">Friends</div>
        </h2>
        <img src="/images/wireframe/centered-paragraph.png" className="ui large centered image" alt=""/>
      </div>
    );
  }
}