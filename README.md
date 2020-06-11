This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Day-1 : React Project Set Up & Fundamentals

- Install create-react-app by running this command in your terminal:

### `npm install -g create-react-app`
### `npx create-react-app app_name`

## Day-2 : Components and Props

- Created Component folder in src folder
- Into Component folder Parent folder made for App.js file
- Into Component folder Child folder made for Users.js file
- Users.js imported in App.js
- App.js imported in Index.js file

## Day-3 : React Lifecycle, Class Component, Functional Component, Stateful Component, Stateless component

- Created Component folder in src folder
- Into Component folder created
 **LifeCycle.js** 
 **StateFullComponent.js** 
 **StatelessComponent.js** 
 **FunctionalComponent.js**
 - All components called into **App.js**
 - All LifeCycles Checked using All States.
 - Only during mount setState() is working.
 - Mount is first calling constructor thenafter should update and update constructor is calling.
-**FunctionalComponent.js** is made without using class or constructor.
- In **StateFullComponent.js** function created without constructor.
- Into onClick butoon auto increment added
- Into onChange Input Value  **StateFullComponent.js** **StatelessComponent.js** and **FunctionalComponent.js** is calling.
- Props Validation Complete (When we add static sting into App.js name state that can shows validation error into console log of browser)

## Day 3 (Second Task) : React Life-cycle, Conditional Rendering & Events

- Into **Users.js** file 
    -Created one pure-component function.
    -Used click events with passing parameter.
    -Called events from child component.

- Into **App.js** file
    -Implemented mounting, updating and unmounting lifecycle methods --> Ignored getSnapshotBeforeUpdate() as per instructions.
    -Practiced on conditional rendering.
    -Created pure-component.

- Into **ErrorBoundary.js** file
    -Implemented Error handling LifeCycle.