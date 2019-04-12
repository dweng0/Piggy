```js
<Image size="small" src="./src/logo.svg" link="/" />
```

You can add a custom props to an example wrapper:

```jsx { "props": { "src": "./src/logo.svg", "size": "small", "className": "propogate additional classNames if required"  } }
<Image src="./src/logo.svg" size="small" link="/"/>

```

```jsx static
import React from 'react';
```


```html
<a class="ui small image " href="/"><img src="./src/logo.svg"/></a>
```