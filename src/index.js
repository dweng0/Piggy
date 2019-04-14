import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Splash from './containers/Splash';
import Accounts from './containers/Accounts';
import Header from './components/Header';
import NoService from './containers/NoService';
import NoMatchedRoute from './containers/NoMatchedRoute';
import Transactions from './containers/Transactions';
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
