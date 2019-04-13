import axios from 'axios';
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
    return {
        identify: () => {
           return axios.get(apiPath +'/v2/account-holder/individual', {            
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization' : 'Bearer ' + accessToken
                  },
                  withCredentials: true,
            })
        }
    }
}
export default starling