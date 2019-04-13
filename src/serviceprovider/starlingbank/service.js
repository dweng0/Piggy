import axios from 'axios';
import _ from 'underscore';
import { 
    serviceUrl,
    accessToken,
    refreshToken
} from '../../constants/starlingConstants'

const version = "v1";
export default class StarlingService {

    options = {
        serviceUrl,
        accessToken,
        refreshToken,
        version
    }

    constructor(options) {
        if(options)
        {
            console.log('initializing with new options');
            _.extend(this.options, options);
        }

        this.options.headers = 
        this.buildBaseUrl();
        
    }

    buildBaseUrl = () => {
        this.options.baseUrl = this.options.baseUrl = this.options.serviceUrl + '/' + this.options.version + '/';
    }

    updateVersion = (version) => {
        if(version)
        {
            this.options.version = version;
            this.buildBaseUrl();
        }
    }
    
    getFullUrlForResource = (resource, Uids) => {
        const pathUrl = this.urlForResource[resource];
        if(!pathUrl)
        {
            throw new Error("unable to find resource");
        }
        return this.options.baseUrl + pathUrl;
    }

    urlForResource = {
        'transactions': 'transactions'
    }

    get(resource) {
        return axios.get(this.getFullUrlForResource(resource), {
           
        });
    }
    
}

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