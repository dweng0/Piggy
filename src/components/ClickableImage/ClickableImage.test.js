import React from 'react';
import ReactDOM from 'react-dom';
import ClickableImage from './ClickableImage';

it('Expect header to render', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ClickableImage />, div);
  ReactDOM.unmountComponentAtNode(div);
});