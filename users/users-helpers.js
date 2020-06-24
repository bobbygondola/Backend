const db = require('../data/db-config');

//GETS ONLY
const getAllProjects = (id) => {
    return db('projects')
    .join("students", "students.id", "projects.student_id")
    .select("projects.project_name", "projects.due_date", "projects.student_id", "students.name", "projects.project_type", "projects.desc", "projects.completed")

}
const getAllTeachers = () => {
    return db('teachers')
    .select("teachers.username", "teachers.subject")
}
const getMentoredStudents = (id) => {
    return db('students')
    .where({teacher_id:id})
}
const getById = (id, sid) => {
    return db("students")
    .where({teacher_id:id})
    .where("id", sid)
}
//END OF GETS ONLY


//POSTS ONLY
const addStudent = (student) => {
    return db('students')
    .insert(student, "id")
    .orderBy("id")
}
const addProject = (project, id) => {
    return db('projects')
    .join("students", "students.id", "projects.student_id")
    .select("projects.project_name", "projects.student_id", "students.name", "projects.project_type", "projects.desc", "projects.completed")
    .insert(project)
    .where({student_id:id})
}   
//end of posts

//Puts only
const editStudent = (id,studentId,changes) => {
    return db('students')
    .update(changes)
    .where({teacher_id:id})
    .where("id", studentId)
}



//DELETES ONLY
// deletes student and all associated projects
const deleteStudent = (id, studentId) => {
    return db("students")
    .where({teacher_id:id})
    .where("id", studentId)
    .del()
}


module.exports = {
    getAllProjects,
    getAllTeachers,
    getMentoredStudents,
    addStudent,
    getById,
    addProject,
    deleteStudent,//and projects
    editStudent
    //update project
}