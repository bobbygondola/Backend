// Update with your config settings.
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

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
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
