# Workana react interview
## how to run the project ?
just enjoy it here: 

## Questions and answers
1. Why do we use Keys in ReactJS lists?

Keys are used in ReactJS lists identity to list items. so it knows when an individual element changed and avoids unnecesary renders.

ˇ
2. How can the traversal of lists be achieved in ReactJS?

We can use javascript array methods like `map()`. 

3. What do you understand about components in React?

Components in React are reusable and self-contained units of UI that can be composed to build larger elements.

3. Explain the two types of Components in ReactJS?

The two types of components in React are:
- Functional Components: Stateless components defined as JavaScript functions. They are often used for presenting UI.
- Class Components: Stateful components defined as ES6 classes. They have access to state and lifecycle methods, making them suitable for complex logic and managing state.

4. What are Synthetic events in React?

Synthetic events in React are a cross-browser wrapper around the native browser events. They provide a consistent interface for handling events, regardless of the browser.

5. What are Pure Components in ReactJS?

Pure Components in React are class components that automatically implement the shouldComponentUpdate method with a shallow prop and state comparison. This prevents unnecessary renders when the props or state haven't changed.

6. What are some important features of Redux?

Key features of Redux include:
Centralized Store: Single source of truth for the entire state of the application.
Predictable State: State changes are made through pure functions called reducers.
Immutable State: State is not mutated directly but instead replaced with a new state.
Time-Travel Debugging: Ability to move forward and backward in the application's state.

7. What do you understand about Flux in React?

Flux is an architectural pattern used with React to manage the flow of data in a unidirectional way. It consists of actions, dispatchers, stores, and views.

8. Why are Routers used in ReactJS?

Routers in React are used to handle navigation and enable the creation of single-page applications (SPAs). They allow different components to be rendered based on the current URL, providing a better user experience without full-page reloads.

9. What are some disadvantages associated with the ReactJS framework?

Some disadvantages of ReactJS include the boilerplate code required for certain features, and the potential for performance issues in large applications.

10. Why can’t browsers read JSX? How can browsers be made to read JSX?

Browsers can't directly read JSX because it's not javascript. JSX needs to be transpiled into standard JavaScript using tools like Babel before it can be executed in the browser.

11. What do you understand about Higher-Order Components in ReactJS?

Higher-Order Components (HOCs) in React are functions that take a component and return a new component with enhanced functionality. They enable code reuse and logic abstraction.

12. What do you understand by References in ReactJS?

References in React are a way to interact with the real DOM or with React components. They provide a way to access and interact with a React element or component directly. Refs are often used for actions like focusing an input or animating an element.

13. What are Props in ReactJS?

Props (short for properties) are a mechanism for passing data from a parent component to its child components. They are immutable and provide a way to configure and customize child components.

14. How do you modularize code in the ReactJS framework? 

Code modularization in React is achieved by breaking down large components into smaller, reusable components. These smaller components can be organized into directories, and the application can be structured based on features or functionality.

15. What is the use of Webpack in React?

Webpack is a module bundler (just like rollup or esbuild) that is often used in projects to bundle and package JavaScript and other assets. It helps in optimizing and organizing the codebase, including features like code splitting, hot module replacement etc.

16. What is Babel in ReactJS?

Babel is a JavaScript compiler that is used in React projects to transform JSX and modern JavaScript syntax into a version of JavaScript that is compatible with a wide range of browsers.

17. What is Prop-drilling in ReactJS?

Prop-drilling refers to the process of passing props down through multiple levels of nested components, even when some of the intermediate components do not use those props. It can make the code harder to maintain and understand. Context or state management tools like Redux can be used to mitigate prop-drilling.

18. What are Error boundaries in ReactJS?

Error boundaries in React are components that catch JavaScript errors anywhere in their child component tree and log those errors or display a fallback UI. They help in preventing the entire application from crashing due to unhandled errors.

19. What do you understand about the Strict mode in React?

Strict mode in React is a tool that performs additional runtime checks and warnings to help identify and fix common mistakes. Strict mode is used to catch and address issues early in development.