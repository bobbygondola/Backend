const db = require('../data/db-config');

//register
const register = (credentials) => {
    return db('teacher')
    .insert(credentials)
    .select("teacher.username")
}
//login
const login = (dataMatch) => {
    return db("teacher").where(dataMatch).orderBy("id");
  }

module.exports = {
    register,
    login
}