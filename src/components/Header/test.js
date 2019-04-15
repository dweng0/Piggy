import React from 'react';
import Enzyme, { shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../../reducers';
import Header from './index';
import _ from 'underscore';

Enzyme.configure({adapter: new Adapter()})

const setup = (initialProps) => {
  let props ={};
  _.extend(props, initialProps);

  const headerWrapper = mount(
    <Provider store={createStore(reducers)}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );
  return {
    props,
    headerWrapper
  }
};

describe('Test header renders correctly', () => {
  it('should not render when empty', () => {
    expect(() => { shallow(<Header />) }).toThrow();
  });
});