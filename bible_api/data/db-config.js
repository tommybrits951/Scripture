const knex = require('knex')
const config = require('../../knexfile')
const env = 'development'

module.exports = knex(config[env])