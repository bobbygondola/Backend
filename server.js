
const express = require('express');
const helmet = require('helmet');
const server = express();
const morgan = require('morgan');
const userRouter = require('./users/users-router');
const authRouter = require('./auth/auth-router');
const dbConnection = require('./data/db-config');
const authenticate = require('./auth/requires-auth');
const cors = require('cors')

server.use(express.json());
server.use(morgan());
server.use(helmet());
server.use(cors());

                                            //session
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


server.use('/api/users', authenticate, userRouter);//for teacher/student data
server.use('/api/auth', authRouter);// for register/login/logout use


//api test
server.get('/', (req,res) => { //to test the api.. npm run server + //localhost:8000
    res.status(200).json(process.env.GREET)
})

module.exports = server;
