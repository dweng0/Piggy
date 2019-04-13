import { combineReducers } from 'redux';

export const savingAmountReducer = (amount=null, action) => {
    if(action.type === "AMOUNT_CALCULATED")
    {
        return action.payload
    }
    return amount;
};

export const selectedAccountReducer = (selectedAccount=null, action) => {
    if(action.type === 'ACCOUNT_SELECTED')
    {
        return action.payload
    }
    return selectedAccount;
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
    account: selectedAccountReducer,
    saving: savingAmountReducer
})