import React from 'react';
import { shallow } from 'enzyme';
import Detail from './index';
import 'jest'

describe("Positive and negative testing", () =>{
  it('should throw with no props', () => {
    expect(() => {
        shallow(<Detail/>)
    }).toThrow();
  });

  it('Should throw There is no content', () => {
    expect(() => {
      shallow(<Detail title="this is a title" cardImage="./thing.png" />);
    }).toThrow();
  });

  it('should throw if there is no title', () => {
    expect(() => {
      shallow(<Detail content="this is content" cardImage="./thing.png"/>);
    }).toThrow();
  });

  it('should throw if no image', () => {
    expect(() => {
      shallow(<Detail title="this is a title" content="this is content"/>);
    }).toThrow();
  });
 });
 