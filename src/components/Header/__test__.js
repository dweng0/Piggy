import React from 'react';
import ReactDOM from 'react-dom';
import Header from './index';

it('Expect header to render', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header />, div);
  ReactDOM.unmountComponentAtNode(div);
});