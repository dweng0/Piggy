import React, { Component } from 'react';

export default class Accounts extends Component {
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