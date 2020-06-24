const jwt = require("jsonwebtoken");
const secrets = require("../config/secrets")
module.exports = (req, res, next) => {

  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, secrets.jwtSecret, (error, decodedToken) => {
      if (error) {
        res.status(401).json({ error: "You must be logged in to do this" });
      } 
      else {
        req.jwt = decodedToken;
        next();
      }
    });
  } else {
    res.status(401).json({ error: "You must be logged in to do this" });
  }
};
  

    // module.exports=(req,res,next) => {
    //     const logged = req.session.user;
    //     if(logged){
    //         next()
    //     } else {
    //         res.status(401).json({message: "You must login first before accessing the schedules!"})
    //     }}