import { combineReducers } from 'redux';

export const savingAmountReducer = (amount=null, action) => {
    if(action.type === "AMOUNT_CALCULATED")
    {
        return action.payload
    }
    return amount;
};

export const goalReducer = (goal=null, action) => {

    switch(action.type)
    {
        case 'GOAL_SELECTED':
        case 'GOAL_SUBMITTED':
        {
            return action.payload
        }
        default: 
        {
            return goal
        }
    }
}

export const userSubmittedGoalReducer = (selectedGoal=null, action) => {
    if(action.type === 'GOAL_SELECTED')
    {
        return action.payload
    }
    return selectedGoal;
}

export const identityReducer = (name=null, action) => {
    if(action.type === "NAME_DEFINED")
    {
        return action.payload
    }
    return name;
};

export default combineReducers({
    userName: identityReducer,
    goal: goalReducer,
    saving: savingAmountReducer
})