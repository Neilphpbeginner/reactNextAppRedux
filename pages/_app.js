import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/styles.css";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import counterReducer from "../state/reducer";

const store = createStore(
  counterReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default function _app({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
