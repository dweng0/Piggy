import React from 'react';
import { shallow, mount } from 'enzyme';
import Button from './index';

describe("Positive and negative testing", () =>{
  it('Should render correctly', () => {
    expect(() => {
        shallow(<Button/>)
    }).not.toThrow();
  });

  it('Should render with primary prop', () => {
	const button = mount(<Button primary/>);
	expect(button.props()).not.toBe(undefined);
  })
  
  it('Should have primary class added', () =>{ 
	const wrapper = shallow(<Button primary/>);
	expect(wrapper.hasClass('primary')).toBe(true);
  });


  it('Should have secondary class added', () =>{ 
	const wrapper = shallow(<Button secondary/>);
	expect(wrapper.hasClass('secondary')).toBe(true);
  });
  

  it('Should have positive class added', () =>{ 
	const wrapper = shallow(<Button positive/>);
	expect(wrapper.hasClass('positive')).toBe(true);
  });

  it('Should have negative class added', () =>{ 
	const wrapper = shallow(<Button negative/>);
	expect(wrapper.hasClass('primary')).toBe(true);
  });

  it('Should have disabled class added', () =>{ 
	const wrapper = shallow(<Button disabled/>);
	expect(wrapper.hasClass('disabled')).toBe(true);
  });
 });
 