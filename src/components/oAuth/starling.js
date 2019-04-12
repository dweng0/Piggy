import React from 'react';
import { oAuthUrl } from '../../constants/starlingConstants';
export default class StarlingAuth extends React.Component {
    render() {
        return(
            <div class="item">
                <a href={oAuthUrl} className="small teal ui button">
                    Login to Starling
                </a>
            </div>
        );
    }
}