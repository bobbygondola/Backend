# Backend
Repository for Backend

## WELCOME!
# This is the backend for the BetterProfessor App!
__________________________________________________________

# login/logout Endpoints
/register.. username: [], password: [], department: [] --required
/login..    username: [], password: [] --required

# .get Endpoints
/dates.. APPOINTMENT CARDS
/teachers.. AVAILABLE TEACHERS

/students.. ALL STUDENTS IN THE SYSTEM
/students/:id.. STUDENT BY ID

# .post Endpoints
/students.. name:[], email:[], class:[] --required
/dates..    date:[], time:[], desc:[], student_id:[], teacher_id:[] --required 
**--please only add student_id and teacher_id not names yet..**

# .delete Endpoints
/dates/:id.. DELETES APPOINTMENT CARD
/students/:id.. DELETES STUDENT BY ID --deletes student and all appt dates for the student