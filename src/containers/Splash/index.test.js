import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Splash from './index';

describe('Splash screen, limied functionality', () => {
  it('should render', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Splash />
      </BrowserRouter>
    , div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
