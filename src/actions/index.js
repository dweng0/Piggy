export const userNameDefined = name => {
    return {
        type: 'NAME_DEFINED',
        payload: name
    }
}

export const goalSelected = goal => {
    return {
        type: 'GOAL_SELECTED',
        payload: goal
    }
}

export const roundUpAmountCalculated = amount => {
    return {
        type: 'AMOUNT_CALCULATED',
        payload: amount
    }
}