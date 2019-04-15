export const userNameDefined = name => {
    return {
        type: 'NAME_DEFINED',
        payload: name
    }
}

export const userSubmitedGoal = goal => {
    return {
        type: 'GOAL_SUBMITTED',
        payload: goal
    }
}

export const roundUpAmountCalculated = amount => {
    return {
        type: 'AMOUNT_CALCULATED',
        payload: amount
    }
}