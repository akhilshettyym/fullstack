const redux = require('redux')
const createStore = redux.createStore
const combineReducers = redux.combineReducers

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
const initialCakeState = {
  numOfCakes: 10
}
const initialIceState = {
  numOfIce: 12
}

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE: return {
      ...state,
      numOfCakes: state.numOfCakes - 1
    }
    default: return state
  }
}
const iceReducer = (state = initialIceState, action) => {
  switch (action.type) {
    case BUY_ICE: return {
      ...state,
      numOfIce: state.numOfIce - 1
    }
    default: return state
  }
}

const rootReducer = combineReducers({
  cake: cakeReducer,
  ice: iceReducer
})
const store = createStore(rootReducer)
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