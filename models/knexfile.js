// Update with your config settings.
const {knexSnakeCaseMappers} = require('objection');

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'mysql2',
    connection: {
      host: "localhost",
      user:  'root',
      port: '3306',
      database: 'todo_appdb',
      password: 'Olaitan'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    seeds : {
      directory: "./seeds"
    },                                                                                                                                                                                                                                                                                                                                                                                                                                            
    ...knexSnakeCaseMappers
  }
};
