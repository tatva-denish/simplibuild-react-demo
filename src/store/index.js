import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import rootReducer from "../reducers";

/**
 * Store configuration
 * @params initialState
 */
const configureStore = (initialState = {}) => {
  let composeEnhancers = compose;

  if (process.env.NODE_ENV !== "production" && typeof window === "object") {
    /* eslint-disable no-underscore-dangle */
    if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});
    /* eslint-enable */
  }

  const enhancers = [applyMiddleware(thunk)];
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(...enhancers)
  );

  return store;
};

export default configureStore;
