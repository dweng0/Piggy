import React from 'react';
import { shallow } from 'enzyme';
import List from './index';

describe("Positive and negative testing", () =>{
  it('should throw with no props', () => {
    expect(() => {
        shallow(<List/>)
    }).toThrow();
  });

  it('Should throw if items is not an array', () => {
    expect(() => {
      shallow(<List items="/"/>);
    }).toThrow();
  });

  it('Should throw items array is empty', () => {
    expect(() => {
      shallow(<List items={[]}/>);
    }).toThrow();
  });

  it('Should render when given an array of items', () => {
    let items = [];
    items.push({
      uid:1,
      title: "test",
      content: "test"
    });
    const list = shallow(<List items={items} />);

    expect(list.exists('.cards')).toBe(true);
  })
 });
 