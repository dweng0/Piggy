```js
<ClickableImage size="small" src="./src/logo.svg" link="/" />
```

You can add a custom props to an example wrapper:

```jsx { "props": { "src": "./src/logo.svg" "size": "small" } }
<ClickableImage src="./src/logo.svg" size="small" link="/" onClick={() => { alert('You clicked me!')}}/>

```

```jsx static
import React from 'react';
import { Image } from 'semantic-ui-react';
```


```html
<a class="ui small image " href="/"><img src="./src/logo.svg"/></a>
```