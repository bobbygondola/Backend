
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('teacher').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('teacher').insert([
        {username: 'bobbyg', password:'bobbyg', department:'software'}
      ])
      .then(function () {
        return knex('student').insert([
          {name:'Elon', email:"elonmusk@gmail.com", class: 'software'},
          {name:'Jimmy', email:"jimmyreed@gmail.com", class: 'software'},
          {name:'Nicholas', email:"nicholasmorgan@gmail.com", class: 'software'},
          {name:'Patrick', email:"patrickorielly@gmail.com", class: 'software'},
          {name:'Jeanine', email:"jeaninethegreat@gmail.com", class: 'software'}
        ])
      })
      .then(function () {
        return knex('date').insert([
          {date: "7/3/2020", time: '5pm',
           desc: "we will be discussing the question on migrations",
            "student_id": 3, "teacher_id": 1},
            {date: "7/1/2020", time: '2pm',
           desc: "Essay prompt question/node.js question",
            "student_id": 2, "teacher_id": 1},
            {date: "7/08/2020", time: '3pm',
           desc: "Collab on backend/frontend development",
            "student_id": 5, "teacher_id": 1},
            {date: "7/18/2020", time: '6:30pm',
           desc: "Appointment for help on javascript",
            "student_id": 4, "teacher_id": 1}
        ])
      })
    });
};
