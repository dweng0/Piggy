```jsx
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter} from 'react-router-dom';
import reducers from '../../reducers';

<Provider store={ createStore(reducers) }>
    <BrowserRouter>
        <Header />
    </BrowserRouter>
</Provider>
```

The header will attempt to connect to starling api service to grab user details. The header depends on redux and browser router in order to provide better context to the user and for navigation

```jsx static
<Provider store={ createStore(reducers) }>
    <BrowserRouter>
        <Header />
    </BrowserRouter>
</Provider>

```
