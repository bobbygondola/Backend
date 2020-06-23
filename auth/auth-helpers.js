const db = require('../data/db-config');

//register
const register = (credentials) => {
    return db('teachers')
    .insert(credentials)
    .select("teacher.username")
}
//login
const login = (dataMatch) => {
    return db("teachers").where(dataMatch).orderBy("id");
  }

module.exports = {
    register,
    login
}