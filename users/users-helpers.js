const db = require('../data/db-config');

//GETS ONLY
const getAllDates = () => {
    return db('date')
    .join("student", "student.id", "date.student_id")
    .join("teacher", "teacher.id", "date.teacher_id")
    .select("date.date", "date.time", "date.desc", "date.student_id", "student.name", "teacher.username")
}
const getAllTeachers = () => {
    return db('teacher')
    .select("teacher.username", "teacher.department")
}
const getAllStudents = () => {
    return db('student')
}
const getById = (id) => {
    return db('student')
    .where({id})
}
//END OF GETS ONLY

//POSTS ONLY
const addStudent = (student) => {
    return db('student')
    .insert(student)
    .orderBy("id")
}
const addDate = (details) => {
    return db('date')
    .insert(details)
    .orderBy("id")
}
//DELETES ONLY
const deleteDate = (id) => {
    return db('date')
    .where({id})
    .del()
}
const deleteStudent = (id) => {
    return db("student")
    .where({id})
    .del()
}

module.exports = {
    getAllDates,
    getAllTeachers,
    getAllStudents,
    addStudent,
    addDate,
    getById,
    deleteDate,
    deleteStudent
}