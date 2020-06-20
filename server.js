const express = require('express');
const server = express();
const helmet = require('helmet');
const morgan = require('morgan');

server.use(morgan());
server.use(helmet());
server.use(express.json());

//test localhost:8000/
server.get('/', (req,res) => {
    res.status(200).json({api: "is up, enjoy the server!"})
})

module.exports = server;