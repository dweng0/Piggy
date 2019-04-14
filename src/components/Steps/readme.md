```js
import React from 'react';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../../reducers';

<Provider store={ createStore(reducers) }>
    <Steps />
</Provider>

```

The component looks at the redux store state to determine the location of the user

