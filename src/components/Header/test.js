import React from 'react';
import Enzyme, { shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from './index';

Enzyme.configure({adapter: new Adapter()})

describe('Test header renders correctly', () => {
  it('should not render when empty', () => {
    expect(() => { shallow(<Header />) }).toThrow();
  });
});