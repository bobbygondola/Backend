// Update with your config settings.

const pgConnection = process.env.DATABASE_URL || "postgresql://postgres@localhost/BetterProfessor";

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './BetterProfessor.sqlite3'
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './/data/seeds'
    },
    pool: {
      afterCreate: (conn, done) => {
        //runs after onnection with DB is made
        conn.run('PRAGMA foreign_keys = ON', done)
      },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: "pg",
    connection: pgConnection,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },

}
}
