import React from 'react';
import ReactDOM from 'react-dom';
import Image from './Image';

it('Expect header to render', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Image />, div);
  ReactDOM.unmountComponentAtNode(div);
});