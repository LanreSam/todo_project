// Update with your config settings.
const {knexSnakeCaseMappers} = require('objection');
// require('dotenv').config()

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: process.env.CLIENT,
    connection: {
      host: process.env.HOST,
      user:  process.env.USER,
      port: process.env.DB_PORT,
      database: process.env.DATABASE,
      password: process.env.PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: process.env.MIGRATIONS_NAME,
    },                                                                                                                                                                                                                                                                                                                                                                                                                                            
    ...knexSnakeCaseMappers
  }
};
