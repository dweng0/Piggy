```js
const props = {
    afterGoalSubmit: () => {
        return;
    }
}
return (
   <GoalForm afterGoalSubmit={props.afterGoalSubmit} />
);

```
The goal form requires an 'afterGoalSubmit' function to be provided to it. This function will be called after the form has been submitted, It will contain an api ready savings-goal resource ready for sending to the server

```jsx static
 const afterGoalSubmit: () => {
        return;
    }
 }

 <GoalForm afterGoalSubmit={afterGoalSubmit} />

```

