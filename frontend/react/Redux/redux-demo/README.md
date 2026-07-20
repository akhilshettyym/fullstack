# REDUX

Redux is a JavaScript library used for managing the state of an application, particularly in front-end development with libraries like React. 

It provides a centralized store for application data, making it easier to manage and share state across different components, and enabling features like time-travel debugging and predictable state update.

---

## THREE CORE CONCEPTS :

Entities :
SHOP         -  Stores cakes on a shelf              -   CUSTOMER - But a cake.
SHOPKEEPER   -  At the front of the store            -   SHOPKEEPER - Remove a cake from the shelf
CUSTOMER     -  At the store entrance                -   Receipt to keep track.

SHOP                    =   STORE   - Holds the state of the application.
INTENTION to BUY_CAKE   =   ACTION  - Describes what happened.
SHOPKEEPER              =   REDUCER - Ties the store and actions togather.

- A STORE that holds the state of your application.
- An ACTION that describes the changes in the state of the application.
- A REDUCER which actually carries out the state transition depending on the action.

---

## First Principle :
The state of the whole application is stores in an object tree within a single store.
Maintain our app state in a single object which would be managed by the Redux store.

Cake shop -
Let's contradict we are tracking the number of ckes on the shelf.
{
    numberOfCakes : 10;
}

---

## Second Principle :
The only way to change the state is to emit an action, an object describing what happened.
To update the state of your app, you need to let Redux know about that with an action.
Not allowed to directly update the state object.

Cake shop - 
Let the shopKeeper know about our action - BUY_CAKE.
{
    type : BUY_CAKE;
}

---

## Third Principle :
To specify how the state tree is transformed by actions, you write pure reducers.
Reducer - (prev state, action) => newState.

Cake shop - 
Reducer is the shopkeeper. 
When action is performed, cake count is reduced and a receipt is printed.

const reducer = (state, action) => {
    switch (action.type){
        case BUY_CAKE: return {
            numOfCakes: state.numOfCakes - 1;
        }
    }
}

---

## REDUX STORE(STATE)  JAVASCRIPT APP  ACTION

Redux store is always subscribed to the App.
But the app cannot directly change the state.
The App should DISPATCH an Action.
Once the action is DISPATCHED the REDUCER then updates the state.

---

# MIDDLEWARE

- Is the suggested way to extend Redux with custom functionality.
- Provides a third-party extension point between dispatching an action, and the moment it reaches the reducer.

# ASYNC ACTION CREATORS

## axios
Requests to an API end point.

## redux-thunk
Define async creators
Middleware