import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Splash from './screens/Splash/Splash';
import Accounts from './screens/Accounts/Accounts';
import Goals from './screens/Goals/Goals';
import Details from './screens/Goals/Details';
import Create from './screens/Goals/Create';
import Header from './components/Header/Header';
import NoService from './screens/NoService/NoService'
import NoMatchedRoute from './screens/NoMatchedRoute/NoMatchedRoute';
import Transactions from './screens/Transactions/Transactions';

import './index.css';

ReactDOM.render(
    <div>
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route path="/" exact component={Splash} />
                    <Route path="/weekly" component={Transactions} />
                    <Route path="/accounts" component={Accounts} />
                    <Route path="/noservice" component={NoService} />
                    <Route path="/accounts/accountUid/goals" component={Goals} />
                    <Route path="/accounts/accountUid/goals/create" exact component={Create} />
                    <Route path="/accounts/accountUid/goals/savingsGoalUid" component={Details} />
                    <Route component={NoMatchedRoute}/>
                </Switch>
            </div>
        </BrowserRouter>
    </div>
    , document.getElementById('root'));
