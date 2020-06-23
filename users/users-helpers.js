const db = require('../data/db-config');

//GETS ONLY
const getAllProjects = () => {
    return db('projects')
    .join("students", "students.id", "projects.student_id")
    .select("projects.project_name", "projects.student_id", "projects.project_type", "projects.desc", "projects.completed")
}
const getAllTeachers = () => {
    return db('teachers')
    .select("teachers.username", "teachers.subject")
}
const getMentoredStudents = (id) => {
    return db('students')
    .where({teacher_id:id})
}
// const getById = (id,sid) => {
//     return db("students")
//     .where({teacher_id:id})
//     .where("student.id",sid)
// }

//END OF GETS ONLY

//POSTS ONLY
const addStudent = (student) => {
    return db('students')
    .insert(student, "id")
    .orderBy("id")
}
//DELETES ONLY
const deleteStudent = (id) => {
    return db("students")
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