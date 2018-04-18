import { createStore } from "redux";
import { globalReducer } from "../reducers/reducers";

export const store = createStore(
  globalReducer,
  {
    text: ""
  }

  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
