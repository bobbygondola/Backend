const express = require('express');
const helmet = require('helmet');
const server = express();
const morgan = require('morgan');

server.use(express.json());
server.use(morgan());
server.use(helmet());

server.get('/', (req,res) => {
    res.status(200).json({API: "is up and running."})
})

module.exports = server;
