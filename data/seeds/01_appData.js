
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
          {name:'Elon', email:"elonmusk@gmail.com", class: 'software'}
        ])
      })
      .then(function () {
        return knex('date').insert([
          {date: "7/20/2020", time: '5pm',
           desc: "we will be discussing the question on migrations",
            "student_id": 1, "teacher_id": 1}
        ])
      })
    });
};
