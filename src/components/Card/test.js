import React from 'react';
import { shallow } from 'enzyme';
import Card from './index';
import _ from 'underscore';

const item = {
    content: "test",
    title: "title",
    onListItemClicked: () => {
        return true
    },
    uid: "uid",
    addItemText: "add item text"
};
describe("Positive and negative testing", () =>{
  it('should throw with no props', () => {
    expect(() => {
        shallow(<Card/>)
    }).toThrow();
  });

  it('Should throw if item object is empty is not an array', () => {
    expect(() => {
      shallow(<Card item=""/>);
    }).toThrow();
  });

  it('Should throw item title is missing', () => {
      
    expect(() => {
      shallow(<Card item={_.omit(item, 'title')}/>);
    }).toThrow();
  });

  it('Should throw if no content is provided', () => {
    expect(() => {
        shallow(<Card item={_.omit(item, 'content')}/>);
      }).toThrow();
  });
  it('Should throw if no onListItemclicked fn is provided', () => {
    expect(() => {
        shallow(<Card item={_.omit(item, 'onListItemClicked')}/>);
      }).toThrow();
  });
  it('Should throw if no uid is provided', () => {
    expect(() => {
        shallow(<Card item={_.omit(item, 'uid')}/>);
      }).toThrow();
  });
  it('Should throw if no addItemText is provided', () => {    
    expect(() => {
        shallow(<Card item={_.omit(item, 'addItemText')}/>);
      }).toThrow();
  });

  it('Should render with item object provided', () => {
    const card = shallow(<Card item={item}/>);
    expect(card.exists('.card')).toBe(true);
  });
 });
 