/* eslint-env node */

require('marko/node-require');

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import AppContainer from '../../components/AppContainer';
import onlineOrderingApp from '../../reducers';

const indexTemplate = require('../templates/index');

let store = createStore(onlineOrderingApp);

const AppHandler = (request, reply) => {
    const output = ReactDOMServer.renderToString(
        <Provider store={store}>
            <AppContainer />
        </Provider>
    );

    return reply(indexTemplate.stream({ react: output, state: JSON.stringify(store.getState()) })).type('text/html');
};

export default AppHandler;
