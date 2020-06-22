const knex = require('knex');
const knexConfig = require('../knexfile');
const environment = process.env.NODE_ENV;
module.exports = knex(knexConfig[environment]);

//connection to Database FOR PG ADMIN
// const knex = require('knex');
// const config = require('../knexfile');
// const environment = process.env.ENVIRONMENT || 'development';
// module.exports = knex(config[environment]);