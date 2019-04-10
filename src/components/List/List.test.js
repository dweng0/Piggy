import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import ListItem from './ListItem';

it('Expect List to Render', () => {
  const div = document.createElement('div');
  ReactDOM.render(<List />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Expect List item to Render', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ListItem />, div);
    ReactDOM.unmountComponentAtNode(div);
});