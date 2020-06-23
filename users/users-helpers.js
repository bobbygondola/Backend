const db = require('../data/db-config');

//GETS ONLY
const getAllProjects = () => {
    return db('projects')
    .join("students", "students.name", "projects.student_name")
    .select("projects.project_name", "projects.student_name", "projects.project_type", "projects.desc", "projects.completed")
}
const getAllTeachers = () => {
    return db('teachers')
    .select("teachers.username", "teachers.class")
}
const getMentoredStudents = (id) => {
    return db('student')
    .where({teacher_id:id})
}
// const getById = (id) => {
//     return db('student')
//     .where({id})
// }
//END OF GETS ONLY

//POSTS ONLY
const addStudent = (student) => {
    return db('student')
    .insert(student)
    .orderBy("id")
}
//DELETES ONLY
const deleteStudent = (id) => {
    return db("student")
    .where({id})
    .del()
}

module.exports = {
    getAllProjects,
    getAllTeachers,
    getMentoredStudents,
    addStudent,
    deleteStudent
}