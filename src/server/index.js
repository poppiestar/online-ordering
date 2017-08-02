/* eslint-env node */

import { Server } from 'hapi';
import RootHandler from './routes/app';
import MenuHandler from './routes/menu';

const server = new Server();

server.connection({
    port: 3000,
    host: 'localhost'
});

server.register(require('inert'), (err) => {

    if (err) {
        throw err;
    }

    server.route({
        method: 'GET',
        path: '/',
        handler: RootHandler
    });

    server.route({
        method: 'GET',
        path: '/bundle.js',
        handler: (request, reply) => {
            reply.file('./build/bundle.js');
        }
    });

    server.route({
        method: 'GET',
        path: '/api/menu/{id}',
        handler: MenuHandler
    });
    
    server.start((err) => {

        if (err) {
            throw err;
        }

        console.log(`Server running at: ${server.info.uri}`); // eslint-disable-line no-console
    });
});
