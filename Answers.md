1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
    Map, Filter, Reduce. Object.assign()
1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    Actions are an object that contain a type property, which is required, and an optional payload property. Actions describe an event like when a user clicks a button or submits a form and carries the data that is associated with it.
    Reducers are pure functions that do not have side effects.
    They take to arguments the current state and action object that is sent via the action creator. The reducer takes the type and the payload that comes from the action and recreates the state with updated data.
    The store is where all of the global state of the application lives. It takes in a single reducer which represents the state. Then the entire application is wrapped with a Provider that takes the store in as a prop.
    The store is the single source of truth because all of the state that the store holds is available to any component within the application and state with in the store is predictable.
1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
    Application state is state that could be shared by multiple components within the application. Component state is state that will only be used within that specific component. Its good to use component state when handling changes with state relating to the UI within that component such as getting the values of input fields in a form. Application state should be used when different components are going to need the same data or when the amount of data being used is very large.

1.  What is middleware?
    Middleware is a function that returns a function that returns a function. When an action is being dispatched to the store they can interact with the action before it reaches the reducer.
1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    redux-thunk is a middleware that allows us to perform async calls to an api in the action creator
1.  Which `react-redux` method links up our `components` with our `redux store`?

The connect method.
