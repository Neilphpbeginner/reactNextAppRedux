import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/styles.css"

export default function _app({ Component, pageProps} ) {
    return <Component {...pageProps} />
}
