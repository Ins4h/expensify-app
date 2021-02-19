import { createStore } from "redux";

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy,
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy,
});

const resetCount = () => ({ type: "RESET" });

const setCount = ({ set }) => ({
  type: "SET",
  set,
});

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy,
      };
    case "DECREMENT":
      return {
        count: state.count - action.decrementBy,
      };
    case "RESET":
      return {
        count: 0,
      };
    case "SET":
      return {
        count: action.set,
      };
    default:
      return state;
  }
};

const store = createStore(countReducer);

// watching redux store changes

store.subscribe(() => {
  console.log(store.getState());
});

// Actions = than an object that gets sent to the store

// Increment the count
store.dispatch(incrementCount({ incrementBy: 6 }));

store.dispatch(decrementCount());

store.dispatch(incrementCount({ incrementBy: 2 }));
// console.log(store.getState());

store.dispatch(resetCount());

store.dispatch(decrementCount({ decrementBy: 6 }));

store.dispatch(setCount({ set: 54 }));
