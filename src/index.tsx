import * as React from "react";
import * as ReactDOM from "react-dom";
import { injectGlobal } from "./theme/theme";
import Main from "./components/Main";
import { Provider } from "react-redux";
import { store } from "./store/";

injectGlobal`
    * { margin: 0; padding: 0; }
`;
ReactDOM.render(
  <Provider store={store}>
    <Main text={"Hello"} onSliderChange={"world"} />
  </Provider>,
  document.getElementById("example")
);
