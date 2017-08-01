/* eslint-env node */

import { Server } from 'hapi';
import RootHandler from './routes/app';

const server = new Server();

server.connection({
    port: 3000,
    host: 'localhost'
});

server.route({
    method: 'GET',
    path: '/',
    handler: RootHandler
});

server.start((err) => {

    if (err) {
        throw err;
    }

    console.log(`Server running at: ${server.info.uri}`); // eslint-disable-line no-console
});
