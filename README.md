# Attention

# Hello, this is the backend for IOS and Web
# Made by Robert Gondola
# + Docs!
- for questions email me!
- This back-end was made with Node.js, JavaScript, Express and Jest

## WELCOME!

___
___




## This is the back-end for the BetterProfessor App!
___





## The "required field data" of the docs contains crucial instructions and holds IMPORTANT informaton needed to create/update/delete data. Read Carefully.
---

# Keynotes

- You have to be logged in to a user to access /users/students
  or users/dates or /users/teachers

- register first, then login, then access all data

# BaseUrl

https://betterprofessoruni.herokuapp.com

# Endpoints

are baseUrl + endpoint

---

---

# login/logout Endpoints

| endpoint              | axios type | required field data!                         |
| ------------------ | ---------- | -------------------------------------------- |
| /api/auth/register | .post      | "username", "password", "subject" required!! |
| /api/auth/login    | .post      | "username", "password" required!!            |

# .get Endpoints

| endpoint                                         | axios type | required field data!                                                       |
| --------------------------------------------- | ---------- | -------------------------------------------------------------------------- |
| /api/users/teachers                           | .get       | gets a list of teachers/accounts in the sytem.                             |
| /api/users/teacher/:id/students               | .get       | gets a list of all students you/professor is mentoring.                    |
| /api/users/teacher/:id/students/:studentid    | .get       | gets specific student from specific teacher                                |
| /api/users/teacher/:id/students/projects      | .get       | gets a list of all projects you must attend to with your specific students |
| ^.map over that data for dashboard projects!^ |

# .post Endpoints

| endpoint                                    | axios type | required field data!                                                                           |
| ---------------------------------------- | ---------- | ---------------------------------------------------------------------------------------------- |
| /api/users/teacher/:id/students          | .post      | needs.. "name", "email", "img_url"(optional), "subject", "teacher_id"(just a string)           |
| /api/users/teacher/:id/students/projects | .post      | needs.. "project_name", "due_date", "student_id", "project_type", "desc", "completed"(boolean) |

^that would be the best data to .map over to display "projects" on a dashboard"^

# .put/edit Endpoints

| endpoint                                               | axios type | required field data!                                                                                                               |
| --------------------------------------------------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| /api/users/teacher/:id/students/:studentId          | .put       | edits a student, returns a success message.. needs.. all normal student info                                                       |
| /api/users/teacher/:id/students/projects/:projectId | .put       | edits a project using the teachersId(first in the endpoint), then targeting which project (:projectId). returns a success message! |

# .delete Endpoints

| endpoint                                              | axios .delete | required field data!                                                                             |
| --------------------------------------------------- | ------------- | ------------------------------------------------------------------------------------------------ |
| /api/users/teacher/:id/students/:studentId          | .delete       | deleted a user, use teacherid as first id and whichever studentId you want to to delete!         |
| /api/users/teacher/:id/students/projects/:projectId | .delete       | deletes a project using teacherid as the first id and whichever projectId you want to to delete! |

---
