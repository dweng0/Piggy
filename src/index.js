import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import './index.css';

import Splash from './screens/Splash/Splash';
import Accounts from './screens/Accounts/Accounts';
import Goals from './screens/Goals/Goals';
import Details from './screens/Goals/Details';
import Create from './screens/Goals/Create';

ReactDOM.render(
        <BrowserRouter>
            <div>
                <Route path="/" exact component={Splash} />
                <Route path="/accounts" exact component={Accounts} />
                <Route path="/accounts/accountUid/goals" component={Goals} />
                <Route path="/accounts/accountUid/goals/create" exact component={Create} />
                <Route path="/accounts/accountUid/goals/savingsGoalUid" component={Details} />
            </div>
        </BrowserRouter>
    , document.getElementById('root'));
