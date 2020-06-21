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

module.exports = {
    getAllDates,
    getAllTeachers,
    getAllStudents,
    addStudent,
    addDate
}