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

| field              | axios type | required field data!                            |
| ------------------ | ---------- | ----------------------------------------- |
| /api/auth/register | .post      | "username", "password", "subject" required!! |
| /api/auth/login    | .post      | "username", "password" required!!             |

# .get Endpoints

| field               | axios type | required field data!                                 |
| ------------------- | ---------- | ---------------------------------------------- |
| /api/users/teachers | .get       | gets a list of teachers/accounts in the sytem. |
| /api/users/teacher/:id/students| .get| gets a list of all students you/professor is mentoring. |
| /api/users/teacher/:id/students/:studentid | .get | gets specific student from specific teacher|
| /api/users/teacher/:id/students/projects | .get| gets a list of all projects you must attend to with your specific students|


# .post Endpoints

| field               | axios type | required field data!                                      |
| ------------------- | ---------- | --------------------------------------------------- |
| /api/users/teacher/:id/students| .post | needs.. "name", "email", "subject", "teacher_id"(just a string)  |
| /api/users/teacher/:id/students/projects | .post | needs.. "project_name", "student_id", "project_type", "desc", "completed"(boolean) |
^that would be the best data to .map over to display "projects" on a dashboard"^


# .delete Endpoints

| field                   | axios .delete | required field data!                                      |
| ----------------------- | ------------- | --------------------------------------------------- |
^wait on it^
