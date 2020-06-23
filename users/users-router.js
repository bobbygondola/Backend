const db = require('./users-helpers');
const router = require('express').Router();

//GETS ONLY
router.get('/teachers', (req,res) => {  //working
    db.getAllTeachers()
    .then(teachers => {
        res.status(200).json(teachers)
    })
    .catch(error => {
        console.log("error geting teachers", error);
        res.status(500).json({message: "We are sorry, internal server error!"})
    })
})

//get all students for teacher
router.get('/teacher/:id/students', (req,res) => {  //working
    const id = req.params.id;
    db.getMentoredStudents(id)
    .then(students => {
        if (students.length > 0) {
            res.status(200).json(students)
        } else {
            res.status(404).json({message: "there are no students for this teacher!"})
        }
        
    })
    .catch(error => {
        console.log("error geting students", error);
        res.status(500).json({message: "We are sorry, internal server error!"})
    })
})

router.get('/teacher/:id/students/:studentid', (req,res) => {
    const id = req.params.id;
    const studentid = req.params.studentid;
    db.getById(id, studentid)
    .then(student => {
        if(student.length > 0){
            res.status(200).json(student)
        } else {
            res.status(404).json({message: "there is no such student.."})
        }
    })
    .catch(error => {
        console.log("error geting students", error);
        res.status(500).json({message: "We are sorry, internal server error!"})
    })
})

router.get('/teacher/:id/students/projects', (req,res) => { //working all projects
    const id = req.params.id;
    db.getAllProjects(id)
    .then(projects => {
        res.status(200).json(projects)
    }).catch(error => {
        console.log("error geting projects", error);
        res.status(500).json({message: "We are sorry, internal server error!"})
    })
})
//END OF GETS ONLY

//POSTS
router.post('/teacher/:id/students', (req,res) => {   //working post student
    const student = req.body;
    student.teacher_id = req.params.id
    db.addStudent(student)
    .then(newStudent => {
        console.log("student added", newStudent)
        res.status(201).json({message: "new student added!"})
    })
    .catch(error => {
        console.log("error posting student", error);
        res.status(500).json({message: "We are sorry, internal server error!"})
    })
})

//DELETES

router.delete('/students/:id', (req,res) => { //deletes student and all dates appt to
    const id = req.params.id;
    db.deleteStudent(id)
    .then(deleted => {
        console.log("student deleted", deleted)
        res.status(204).json({message: "Sucessfully Deleted Student."})
    })
    .catch(error => {
        console.log("error deleting student", error);
        res.status(500).json({message: "We are sorry, internal server error!"})
    })
})
//NEEDS PUT!!!!!!!!!!!!!

module.exports=router;
