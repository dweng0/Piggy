```js
 <div className="row" style={{ padding: '175px' }}>
    <div className="ui two column centered grid">
        <div className="column">
            <Loading/>
        </div>
    </div>
</div>
```

Component will try to grab the whole screen if its not wrapped in a container

```jsx 
<div className="row" style={{ padding: '175px' }}>
    <div className="ui two column centered grid">
        <div className="column">
            <Loading/>
        </div>
    </div>
</div>
```

```jsx static
import React from 'react';

const Loading = () => {
    return (
        <div className="ui active inverted dimmer">
            <div className="ui text loader">Loading</div>
        </div>
    );
}
export default Loading;
```
