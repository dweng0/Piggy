export const userNameDefined = name => {
    return {
        type: 'NAME_DEFINED',
        payload: name
    }
}

export const accountSelected = account => {
    return {
        type: 'ACCOUNT_SELECTED',
        payload: account
    }
}

export const roundUpAmountCalculated = amount => {
    return {
        type: 'AMOUNT_CALCULATED',
        payload: amount
    }
}