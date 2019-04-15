import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Image from './index';

it('should throw with no props', () => {
  expect(() => {
      shallow(<Image/>)
  }).toThrow();

  expect(shallow(<Image s))
});