```js

import successImage from '../../assets/images/success.jpg';
import ImageComponent from './index';
<ImageComponent src={successImage} size="large" className="ui image bounce forever"/>

```
# todo add bounce and other things as options
You can add a custom props:

```jsx static
 const props = {
    className: "ui image bounce" ,
    src: "this is required, the component will throw without this prop",
    size: "uses semantic-ui size classes to determine image size",
    base64: true //optional, if set will attempt to load byte64 images into the correct dataType
 }
<Image src={successImage} size="large" className="ui image bounce forever"/>
```

