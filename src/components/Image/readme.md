```js
<Image size="tiny" src="./src/logo.svg" className="avatar" />
```

You can add a custom props:

```jsx static
 const props = {
    className: "this will be appended to the css",
    src: "this is required, the component will throw without this prop",
    size: "uses semantic-ui size classes to determine image size"
 }

```

