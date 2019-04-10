import React from 'react';
import ReactDOM from 'react-dom';
import Details from './Details';

it('Expect header to render', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Details />, div);
  ReactDOM.unmountComponentAtNode(div);
});