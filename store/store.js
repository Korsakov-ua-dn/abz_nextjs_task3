import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { appReducer } from "./reducers/app-reducer";
import { usersReducer } from "./reducers/users-reducer";
import { signUpReducer } from "./reducers/sign-reducer";
// import { setInterceptors } from "../api/api";

const rootReducer = combineReducers({
  app: appReducer,
  users: usersReducer,
  sign: signUpReducer,
});

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    if (state.count) nextState.count = state.count; // preserve count value on client side navigation
    return nextState;
  } else {
    return rootReducer(state, action);
  }
};
export const store = createStore(reducer, applyMiddleware(thunkMiddleware));
// create a makeStore function
const makeStore = (context) => store;

// setInterceptors(store)

// export an assembled wrapper
export const wrapper = createWrapper(makeStore, { debug: true });
