```js
 <Details cardImage="../../assets/images/accounts.svg" title="welcome to the details" content="This is adetails sub engagement area" />
```

You can add a custom props to an example wrapper:

```jsx { "props": { "cardImage": "../../assets/images/accounts.svg", "title": "im a title", "content": "Im a content area"  } }
<Details cardImage={props.cardImage} title={props.title} content={props.content}/>

```

```jsx static
import React from 'react';
```


```html
<a class="ui small image " href="/"><img src="../../assets/images/accounts.svg"/></a>
```