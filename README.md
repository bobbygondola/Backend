# Backend

Repository for Backend
This is the backend for ios and web, have fun any questions msg me!

## WELCOME!

# This is the backend for the BetterProfessor App!

# The required data is what needs to be inputed, or crucial information.

---

# keynotes

- You have to be logged in to a user to access /users/students
  or users/dates or /users/teachers

- register first, then login, then access all data

# BaseUrl

https://betterprofessoruni.herokuapp.com

# Endpoints

are baseUrl + endpoint

---

# login/logout Endpoints

| field              | axios type | required data!                            |
| ------------------ | ---------- | ----------------------------------------- |
| /api/auth/register | .post      | username, password, department required!! |
| /api/auth/login    | .post      | username, password required!!             |

# .get Endpoints

| field               | axios type | required data!                                 |
| ------------------- | ---------- | ---------------------------------------------- |
| /api/users/dates    | .get       | gets a list of all APPTS                       |
| /api/users/teachers | .get       | gets a list of teachers/accounts in the sytem. |

# .post Endpoints

| field               | axios type | required data!                                      |
| ------------------- | ---------- | --------------------------------------------------- |
| /api/users/students | .post      | name, email class, required!                        |
| /api/users/dates    | .post      | date, time, desc, student_id, teacher_id required!! |

- please find by teacher\_ id and student_id for making appointments for now

# .delete Endpoints

| field                   | axios .delete | required data!                                      |
| ----------------------- | ------------- | --------------------------------------------------- |
| /api/users/dates/:id    | .delete       | deletes appointment card.                           |
| /api/users/students/:id | .delete       | deletes student and all appt dates for the student. |
