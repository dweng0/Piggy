import axios from 'axios';
import { accessToken } from '../../constants/starlingConstants'
import uuid from 'uuid';

/**
 * Provide a strict interface to Starling APIs.
 * as per spec, does not use oAuth
 * @param {api version} version
 * @returns {Object} an object with function calls that return promises when called
 * @example starling('v1').fetch('customers').then(() => {alert('done!')})
 */
const starling = () => {
    const apiPath = '/api';
    const configOptions = {
        headers:{
            'Content-Type': 'application/json',
            'Authorization' : 'Bearer ' + accessToken
          },
        withCredentials: true
    }

    return {
        identify: () => {
           return axios.get(apiPath +'/v2/account-holder/individual', configOptions)
        },
        transactions: (from, to) => {
            return axios.get(`${apiPath}/v1/transactions?from=${from}&to=${to}`, configOptions)
        },
        accounts: () => {
            return axios.get(`${apiPath}/v2/accounts`, configOptions)
        },
        savingGoals:(accountUID) => {
            return axios.get(`${apiPath}/v2/account/${accountUID}/savings-goals`, configOptions);
        },
        createGoal:(accountUID, body) => {
            return axios.put(`${apiPath}/v2/account/${accountUID}/savings-goals`, body, configOptions);
        },
        transfer: (accountUID, savingsGoalUID, body) => {
            const transferUID = uuid.v4();
            return axios.put(`${apiPath}/v2/account/${accountUID}/savings-goals/${savingsGoalUID}/add-money/${transferUID}`, body, configOptions);
        }
    }
}
export default starling