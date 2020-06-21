const express = require('express');
const helmet = require('helmet');
const server = express();
const morgan = require('morgan');
const userRouter = require('./users/users-router')
const authRouter = require('./auth/auth-router')
const dbConnection = require('./data/db-config')

server.use(express.json());
server.use(morgan());
server.use(helmet());

/////////////////////////////////////////////////////////session
const session = require("express-session");
const KnexSessionStore = require("connect-session-knex")(session);
const sessionConfig = {
    name: "Professors Active Session",
    secret: "Hire Me Elon Musk",
    cookie: {
      maxAge: 1000 * 60 * 60 * 48,//2 days
      secure: false,
      httpOnly: true,
    },
    resave: false,
    saveUninitialized: true,
    store: new KnexSessionStore({
      knex: dbConnection,
      createtable: true,
      clearInterval: 1000 * 60 * 60 * 48,//2 days
    }),
  };
  server.use(session(sessionConfig))

//for teacher/student/appts use
server.use('/api/users', userRouter);
// for register/login/logout use
server.use('/api/auth', authRouter)

server.get('/', (req,res) => {
    res.status(200).json({API: "is up and running."})
})

module.exports = server;
