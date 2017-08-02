/* eslint-env browser */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from '../components/App';
import onlineOrderingApp from '../reducers';

const preloadedState = window.__INITIAL_STATE__;
delete window.__INITIAL_STATE__;

let store = createStore(
    onlineOrderingApp,
    preloadedState,
    window.devToolsExtension && window.devToolsExtension()
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('main')
);

if (module.hot) module.hot.accept();
