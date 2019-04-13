import axios from 'axios';


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
            const accessToken = 'Mz771awWpCZfDbBGR99MYc81RSNXvnG0wbBUN4faJ5tigdnBxe0NpBKpdj0iXeKF';
            const url = baseUrl + gettableUrlEndPoints[endPoint];
            return axios({method: 'get', url: url, headers: {
                'Authorization': 'Bearer ' +accessToken
            }});
            return axios.get(url, {
                headers:{
                    'Authorization': 'Bearer Mz771awWpCZfDbBGR99MYc81RSNXvnG0wbBUN4faJ5tigdnBxe0NpBKpdj0iXeKF'
                }
            });
        }
    }
}
export default starling