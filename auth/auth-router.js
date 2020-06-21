const router = require('express').Router();
const db = require('./auth-helpers')
const bcryptjs = require("bcryptjs");

//register a teacher to manage students
router.post("/register", (req, res) => {
    const { username, password, department } = req.body;
    const rounds = process.env.HASH_ROUNDS || 8;
    const hash = bcryptjs.hashSync(password, rounds);
    db.register({ username, password: hash, department })
      .then(([user]) => {
        res.status(200).json({message: "Welcome Professor!"});
      })
      .catch(error => {
          console.log('error registering', error)
          res.status(500).json({message: "Sorry, try again!"})
      })
  });

  //login as a teacher to manage students
  router.post("/login", (req, res) => {
    const { username, password } = req.body;
    // verify user password
    db.login({ username })
      .then(([user]) => {
          if (user && bcryptjs.compareSync(password, user.password)) {
              req.session.user = user;
            res.status(200)
            .json({
                message: `Welcome Professor ${user.username}`,
                session: req.session});
          } else {
              res.status(401).json({message: "Please Provide Correct Credentials"})
          }
        
      })
      .catch(err => res.send(err));
  });

module.exports=router;