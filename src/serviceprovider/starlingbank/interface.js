import axios from 'axios';
import _ from 'underscore';
import { accessToken } from '../../constants/starlingConstants'

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
            return axios.get(`${apiPath}/v2/accounts/${accountUID}/saving-goals`, configOptions);
        },
        createGoal:(accountUID, body) => {
            return axios.put(`${apiPath}/v2/accounts/${accountUID}/saving-goals`, configOptions);
        },
        tranfer: (accountUID, savingsGoalUID, transferUID) => {
            return axios.put(`${apiPath}/v2/accounts/${accountUID}/saving-goals/${savingsGoalUID}/add-money/${transferUID}`, configOptions);
        }
    }
}
export default starling