import React from 'react';
import { oAuthConfig, oathServiceUrl } from '../../constants/starlingConstants';
import queryString from 'query-string';

const Login = () => {
    const url = oathServiceUrl + "?"+ queryString.stringify(oAuthConfig);
    return(
        <div className="item">
            <a href={url}className="small teal ui button">
                Login
            </a>    
        </div>            
    );
}
export default Login;