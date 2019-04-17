# Project Piggy!
[View Project Progress](https://github.com/dweng0/Piggy/projects/1) <br/>
![Super Pig](./src/logo.svg)

## User journey

- User lands on splash screen, selects button 'start saving' ```/splash```
- App works out how much user can save ```/weekly```
- Results is displayed to user
- User is asked to choose (or create a savings goal) ```accounts```
- user selects savings goal
- Transaction occurs
- User is taken to success screen
- cookie is set which expires at end of week
- attemps to round up this weeks transactions again are prevented if this cookie is present


All images source from the open source website [pixabay](https://pixabay.com)
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.<br>
On [http://localhost:3000](http://localhost:3000)

### `npm test`

Launches the test runner in the interactive watch mode.<br>

### `npm run build`

Builds the app for production to the `build` folder.
