const knex = require('knex')
const knexConfig = require('../knexfile');

module.exports = knex(knexConfig.development);

//connection to Database FOR PG ADMIN
// const knex = require('knex');
// const config = require('../knexfile');
// const environment = process.env.ENVIRONMENT || 'development';
// module.exports = knex(config[environment]);