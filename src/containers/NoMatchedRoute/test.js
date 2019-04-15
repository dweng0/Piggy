import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import NoMatchedroute from './index';

describe('404 screen, limied functionality', () => {
  it('should render', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <NoMatchedroute />
      </BrowserRouter>
    , div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
