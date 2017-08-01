/* eslint-env node */

require('marko/node-require');

import App from '../../components/App';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

const indexTemplate = require('../templates/index');

const greeting = "Obligatory Hello World";

const AppHandler = (request, reply) => {
    const output = ReactDOMServer.renderToString(
        <App greeting={ greeting } />
    );

    return reply(indexTemplate.stream({ react: output })).type('text/html');
};

export default AppHandler;
