/* eslint-env browser */

import React from 'react';
import ReactDOM from 'react-dom';

import App from '../components/App';

const greeting = "Obligatory Hello World";

ReactDOM.render(
    <App greeting={ greeting } />,
    document.getElementById('main')
);
