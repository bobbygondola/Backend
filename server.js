const express = require('express');
const helmet = require('helmet');
const server = express();
const morgan = require('morgan');
const userRouter = require('./users/users-router')
const authRouter = require('./auth/auth-router')

server.use(express.json());
server.use(morgan());
server.use(helmet());

//for teacher/student/appts use
server.use('/api/users', userRouter);
// for register/login/logout use
server.use('/api/auth', authRouter)

server.get('/', (req,res) => {
    res.status(200).json({API: "is up and running."})
})

module.exports = server;
