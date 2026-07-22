const redux = require('redux')
const createStore = redux.createStore

// CAKE
const BUY_CAKE = 'BUY_CAKE'
function buyCake() {
  return {
    type: BUY_CAKE,
    info: 'First redux action'
  }
}
// ICE CREAM
const BUY_ICE = 'BUY_ICE'
function buyIce() {
  return {
    type: BUY_ICE,
    info: 'Redux action with ice'
  }
}

// (prevState, action) => newState
const initialState = {
  numOfCakes: 10,
  numOfIce: 12
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE: return {
      ...state,
      numOfCakes: state.numOfCakes - 1
    }
    case BUY_ICE: return {
      ...state,
      numOfIce: state.numOfIce - 1
    }
    default: return state
  }
}

const store = createStore(reducer)
console.log("Inital state", store.getState());
const unsubscribe = store.subscribe(() => console.log("Updated state", store.getState()))
store.dispatch(buyCake())
store.dispatch(buyIce())
store.dispatch(buyCake())
store.dispatch(buyIce())
store.dispatch(buyCake())
store.dispatch(buyIce())

unsubscribe()

console.log("BANKAI");