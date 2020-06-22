# Backend
Repository for Backend
This is the backend for ios and web, have fun any questions msg me!

## WELCOME!
# This is the backend for the BetterProfessor App!
# The required data is what needs to be inputed, or crucial information. 
__________________________________________________________

# login/logout Endpoints
| field  | axios type        | required data!                                     |
| ------ | ----------------  | ---------------------------------------------------|
| /register| .post       | username, password, department required!!              |
| /login   | .post       | username, password required!!                         |


# .get Endpoints
| field  | axios type        | required data!                                     |
| ------ | ---------------- | --------------------------------------------------- |
| /dates     | .get       | gets a list of all APPTS                              |
| /teachers  | .get       | gets a list of teachers/accounts in the sytem.        |


# .post Endpoints
| field  | axios type        | required data!                                    |
| ------ | ----------------  | --------------------------------------------------|
| /students| .post   | name, email class, required!                              |
| /dates   | .post   | date, time, desc, student_id, teacher_id required!!       |                          
# --please find by teacher_ id and student_id for making appointments for now..


# .delete Endpoints
| field  | axios .delete       | required data!                                     |
| ------ | ----------------   | --------------------------------------------------- |
| /dates/:id      | .delete   | deletes appointment card.                           |
| /students/:id   | .delete | deletes student and all appt dates for the student.   |
             
