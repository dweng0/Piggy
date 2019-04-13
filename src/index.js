import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Splash from './screens/Splash/Splash';
import Accounts from './screens/Accounts/Accounts';
import Header from './components/Header/Header';
import NoService from './screens/NoService/NoService';
import NoMatchedRoute from './screens/NoMatchedRoute/NoMatchedRoute';
import Transactions from './screens/Transactions/Transactions';
import reducers from './reducers';

import './index.css';

ReactDOM.render(
    <Provider store={ createStore(reducers) }>
         <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route path="/" exact component={Splash} />
                    <Route path="/weekly" component={Transactions} />
                    <Route path="/accounts" component={Accounts} />
                    <Route path="/noservice" component={NoService} />
                    <Route component={NoMatchedRoute}/>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
