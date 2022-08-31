import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routers/Router.js'

dotenv.config();

const PORT = process.env.PORT;

const server = express();
server.use(cors());
server.use(express.json());

// Routers session
server.use(router);

server.listen(PORT, () => {
    console.log(`It's alive on port ${PORT}`);
})