import { create, defaults, bodyParser, router } from 'json-server';
import { db } from './db';

const server = create();

server.use(defaults());
server.use(bodyParser);

server.use(router(db));

server.listen(3001);
