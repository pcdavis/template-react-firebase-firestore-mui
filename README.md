### MY NOTES

This repo is a starter template to get a new React website up that includes Firebase for authentication and Firestore for database.
The styling is Material UI based
In the Index.css I have implmented the normalize.css to give it a clean baseline to start working on.
The Firestore config file is not included in the repo - be sure to add it to your gitignore file

Implementation Instructions

To create a new site using this template:

1. Clone the git repo and run npm install
2. Copy the Firebase config file from your Firebase project at https://console.firebase.google.com
3. Create config.js inside the firebase folder of your project and paste the config file in there and export it.
4. It should be working. Test it by signing up for an account and see if it shows up in Firebase authentication
5. git remote -v // confirm you are still connected to the template's remote repo
6. remote rm origin // this will remove the remote repo so you can make changes and not worry about affecting the template.
7. On Github, create a new repo for use with the new site you're creating from the template.
8. git remote add origin newRepoUrl // this will make the new repo you created on Github the origin of the new site where you can backup your work. You are now disconnected from the template and can make whatever changes you want to the new site.

### The rest of the readme is the standard react boilerplate readme

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
