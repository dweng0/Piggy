```js
<Loading />
```

You can add a custom props to an example wrapper:

```jsx 
<Loading />
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
