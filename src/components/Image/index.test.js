import React from 'react';
import { shallow } from 'enzyme';
import Image from './index';

it('should throw with no props', () => {
  expect(() => {
      shallow(<Image/>)
  }).toThrow();
});

it('should render when src props is provided', () => {
  expect(shallow(<Image src="/"/>));
});

it('should apply css from props if provided', () => {
    let image = shallow(<Image src="/" className="testCSS" />);
    expect(image.hasClass('testCSS')).toBe(true);
});

it('should update class with size if provided', () =>{ 
    let image = shallow(<Image src="/" size="large" />);
    expect(image.hasClass('large')).toBe(true);
});