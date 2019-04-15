import React from 'react';
import ReactDOM from 'react-dom';
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
    let className = image.hasClass('testCSS');
    console.log(image);
    expect(className).toBe(true);
});

it('should update class with size if provided', () =>{ 
    let image = shallow(<Image src="/" size="large" />);
    let largeClass = image.hasClass('large');
    console.log(image);
    expect(largeClass).toBe(true);
});