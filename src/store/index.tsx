import { createStore } from "redux";
import { globalReducer } from "../reducers/reducers";

export const store = createStore(
  globalReducer,
  {
    text: "",
    top: 25
  }

  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
