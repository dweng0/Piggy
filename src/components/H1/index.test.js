import React from 'react';
import { shallow, mount } from 'enzyme';
import H1 from './index';

describe("Positive and negative testing", () =>{
  it('Should render correctly', () => {
    expect(() => {
        shallow(<H1/>)
    }).not.toThrow();
  });

  it('Should render with primary prop', () => {
	  const getHeader = () => {
		return mount(<H1 primary/>);
	  }
	expect(getHeader).not.toThrow();

  })

  it('Should have primary class added', () =>{ 
	const wrapper = shallow(<H1 primary/>);
	expect(wrapper.hasClass('primary')).toBe(true);
  });

  

  it('Should have engagement class added', () =>{ 
	const wrapper = shallow(<H1 engagement/>);
	expect(wrapper.hasClass('engagement')).toBe(true);
  });

  it('Should render with engagement prop', () => {
	  const getTitle = () => {
		  return mount(<H1 engagement/>);
	  }
	  expect(getTitle).not.toThrow();
  })
 });
 