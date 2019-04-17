```js
    import Image from '../Image';
    import _ from 'underscore';
 <Details cardImage="./src/assets/images/accounts.svg" title="welcome to the details" content="This is adetails sub engagement area" />
```

You can add a custom props to an example wrapper:

```jsx static
const props = {
    cardImage: "image src" //required
    title: "The title part",
    content: "The content area"
}
```