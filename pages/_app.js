import React from "react";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/styles.css";

export default function _app({ Component, pageProps }) {
  return;
  <Provider>
    <Component {...pageProps} />
  </Provider>;
}
