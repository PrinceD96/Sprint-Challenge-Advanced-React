- [ ] Why would you use class component over function components (removing hooks from the question)?

I would use class components over functional components whenever I need more functionality, like keeping state, lifecycle methods

- [ ] Name three lifecycle methods and their purposes.

1. componentDidMount() is invoked immediately after a component is mounted. It is called once in the component life cycle and it signals that the component and all its sub-components have rendered properly. This is the best place to make API calls since, at this point, the component has been mounted and is available to the DOM.

2. componentDidUpdate() is called after componentDidMount() and can be useful to perform some action when the state changes. componentDidUpdate() takes as its first two arguments the previous props and the previous state. Inside the method we can check if a condition is met and perform an action based on it.

3. componentWillUnmount() is the last function to be called immediately before the component is removed from the DOM. It is generally used to perform clean-up for any DOM-elements or timers created in componentWillMount.

- [ ] What is the purpose of a custom hook?

Custom Hooks are a mechanism to reuse stateful logic (such as setting up a subscription and remembering the current value), but every time you use a custom Hook, all state and effects inside of it are fully isolated.

- [ ] Why is it important to test our apps?

Testing determines whether the app can be successfully downloaded, executed and interacted with the supporting back-end content infrastructure. It's a vital factor in the development process that brings to market the high-quality product.
