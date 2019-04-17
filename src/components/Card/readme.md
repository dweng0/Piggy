```js
import _ from 'underscore';

import Image from '../Image';
import starling from '../../serviceprovider/starlingbank';
import '../../index.css';


const item = {
    content: "test",
    title: "title",
    onListItemClicked: () => {
        return true
    },
    uid: "uid",
    addItemText: "add item text"
};
    <div className="ui link cards" style={{'paddingTop': '35px'}}>
        <Card item={item} />
    </div>
```

### Card component requires the following props
This component is tightly coupled to a savings goal  resource and will try to fetch the saving photo and render it

```jsx static
const item = {
    content: "test",
    title: "title",
    onListItemClicked: () => {
        return true
    },
    uid: "uid",
    addItemText: "add item text"
};
```