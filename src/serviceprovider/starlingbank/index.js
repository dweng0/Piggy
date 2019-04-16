import axios from 'axios';
import { accessToken, WEEKLY_ROUNDUP_COOKIE_NAME } from '../../constants/starlingConstants'
import uuid from 'uuid';
import moment from 'moment';

/**
 * Provide a strict interface to Starling APIs.
 * as per spec, does not use oAuth
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
        getSavingPhoto: (accountUID, savingsGoalUid) => {
            // /api/v2/account/{accountUid}/savings-goals/{savingsGoalUid}/photo
            return  axios.get(`${apiPath}/v2/account/${accountUID}/savings-goals/${savingsGoalUid}/photo`, configOptions);
        },
        createGoal:(accountUID, body) => {
            return axios.put(`${apiPath}/v2/account/${accountUID}/savings-goals`, body, configOptions);
        },
        transfer: (accountUID, savingsGoalUID, body) => {
            const transferUID = uuid.v4();
            return axios.put(`${apiPath}/v2/account/${accountUID}/savings-goals/${savingsGoalUID}/add-money/${transferUID}`, body, configOptions);
        },
        setCookie: () => {
            //set cookie to expire at end of week, must be in utc format
            const expires = moment().utc().endOf('week');
            document.cookie = `${WEEKLY_ROUNDUP_COOKIE_NAME}=true; expires=${expires}`;

        },
        hasCookie: () => {
            const cookieData = document.cookie.split(";");
            return cookieData.find(cookieKeyValue => {
                const cookieParts = cookieKeyValue.split("=");
                return (cookieParts[0] === WEEKLY_ROUNDUP_COOKIE_NAME && cookieParts[1] === "true")
            });
        }
    }
}
export default starling