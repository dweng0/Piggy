```js
const items = [{
    content: "this is a savings goal",
    title: "Savings goal 1",
    onListItemClicked: () => {
        return true
    },
    uid: "uid",
    addItemText: "add item text"
},
{
    content: "this is also a savings goal",
    title: "Savings goal 2",
    onListItemClicked: () => {
        return true
    },
    uid: "uid",
    addItemText: "add item text"
},
{
    content: "another savings goal",
    title: "Savings goal 3",
    onListItemClicked: () => {
        return true
    },
    uid: "uid",
    addItemText: "add item text"
}];
    <List items={items} />
```

### List component requires the folllowing props
The list component renders a list of cards, as such it requires an array of items that the card component requires

```jsx static
const item = [{
    content: "test",
    title: "title",
    onListItemClicked: () => {
        return true
    },
    uid: "uid",
    addItemText: "add item text"
}];
<List items={items} />
```