/* eslint-env node */

require('marko/node-require');

const indexTemplate = require('../templates/index');

const greeting = "Obligatory Hello World";

const AppHandler = (request, reply) => {
    return reply(indexTemplate.stream({ greeting })).type('text/html');
};

export default AppHandler;
