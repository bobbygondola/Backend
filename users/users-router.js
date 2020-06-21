const db = require('./users-helpers');
const router = require('express').Router();

//GETS ONLY
router.get('/dates', (req,res) => {
    db.getAllDates()
    .then(dates => {
        res.status(200).json(dates)
    })
    .catch(error => {
        console.log("error geting dates", error);
        res.status(500).json({message: "We are sorry, internal server error!"})
    })
})

router.get('/teachers', (req,res) => {
    db.getAllTeachers()
    .then(teachers => {
        res.status(200).json(teachers)
    })
    .catch(error => {
        console.log("error geting teachers", error);
        res.status(500).json({message: "We are sorry, internal server error!"})
    })
})

router.get('/students', (req,res) => {
    db.getAllStudents()
    .then(students => {
        res.status(200).json(students)
    })
    .catch(error => {
        console.log("error geting students", error);
        res.status(500).json({message: "We are sorry, internal server error!"})
    })
})
//END OF GETS ONLY

//POSTS
router.post('/students', (req,res) => {
    const student = req.body;
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

router.post('/dates', (req,res) => {
    const newDate = req.body;
    db.addDate(newDate)
    .then(newDate => {
        console.log("date added", newDate)
        res.status(201).json({message: "new date added!"})
    })
    .catch(error => {
        console.log("error posting date", error);
        res.status(500).json({message: "We are sorry, internal server error!"})
    })
})

module.exports=router;
