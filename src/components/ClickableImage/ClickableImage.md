```jsx static
import React from 'react';

//Note that as this depends on Links to work, it must have a Router as an ancestor
 <ClickableImage src="./src/logo.svg" size="small" link="/" onClick={() => { alert('You clicked me!')}}/>
```


```html
<a class="ui small image " href="/"><img src="./src/logo.svg"/></a>
```