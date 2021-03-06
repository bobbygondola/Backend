require('dotenv').config()

module.exports = {
  development: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: "./BetterProfessor.sqlite3.db3",
    },
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      },
    },
  },
  production: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: "./BetterProfessor.sqlite3.db3",
    },
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      },
    },
  },
};

//for postgres

// production: {
//   client: "pg",
//   connection: process.env.DATABASE_URL,
//     pool: {
//       min: 2,
//       max: 10,
//     },
//   migrations: {
//     directory: "./data/migrations",
//   },
//   seeds: {
//     directory: "./data/seeds",
//   },
// },
