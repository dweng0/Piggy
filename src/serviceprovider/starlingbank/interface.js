import axios from 'axios';
import { token } from '../../constants/starlingConstants'; //oAUTH not implemented.....

/**
 * Provide a strict interface to Starling APIs.
 * as per spec, does not use oAuth

 * @param {api version} version
 * @returns {Object} an object with function calls that return promises when called
 * @example starling('v1').fetch('customers').then(() => {alert('done!')})
 */
const starling = (version) => {
    let errors = [];
    if(!version)
    {
        errors.push("A version is required");
    }
    if(!token)
    {
        errors.push("An auth token is required");
    }

    if(errors.length > 0)
    {
        throw new Error(errors.reduce((prev, current) => {return prev + ", " + current}));
    }

    const baseUrl = "https://api-sandbox.starlingbank.com/api/" + version + "/";

    const gettableUrlEndPoints = {
        customers: "customers",
    };
    gettableUrlEndPoints['account-holder/individual'] = 'transactions' //'account-holder/individual';


    return {
        fetch: (endPoint) => {
            //will assert that it doesn't exist, but try anyway.
            console.assert(gettableUrlEndPoints[endPoint], "url end point not found " + endPoint );

            const url = baseUrl + gettableUrlEndPoints[endPoint];
            return axios.get(url, {
                header: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer UaAPFFPjA43GUVuXoWS50Vozu57ngtUAGzSAsWWyrhTdey3XbXZSF1Y8s6519bri"
                }
            });
        }
    }
}
export default starling