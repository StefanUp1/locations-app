# Dependencies used
- MSW: for mocking storybook and test data https://mswjs.io/
- i18n: for localization https://react.i18next.com/
- Storybook: for building UI components and pages in isolation https://storybook.js.org/
- react-testing-library: for writing unit tests https://testing-library.com/docs/react-testing-library/intro/
- react-router-dom: for app navigation https://reactrouter.com/

# Browser support
App is tested in:
- Chrome v96.0.4664.93 
- Safari  v14.1.1
- Firefox v91.0 

Machine MacBook Pro

# Known issues
- storybook-addon-i18n should be added https://storybook.js.org/addons/storybook-addon-i18n
- Storybook console error only on Chrome browser ("All Locations" page)

# Accessability
- All location cards (on "All locations" page) are focusable with "Tab" button, and can be opened on "Enter" key press
- Modal can be closed on "Esc" key press

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**
