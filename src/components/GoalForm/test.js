import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import GoalForm from './index';

describe("Positive and negative testing", () =>{
  it('should throw with no props', () => {
    //expect a afterGoalSubmit prop from redux
    expect(() => {
        shallow(<GoalForm/>)
    }).toThrow()
  });

  it('should throw is afterGoalSubmit if not a function', () => {
    expect(() => {
        shallow(<GoalForm afterGoalSubmit={true}/>)
    }).toThrow()
  })

  it('should render', () => {
    const div = document.createElement('div');
    ReactDOM.render(<GoalForm afterGoalSubmit={() => {return true}} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
 });
 

 