
exports.up = function(knex) {
    return knex.schema
      .createTable('teacher', tbl => {
        tbl.increments();
        tbl.string('username', 100).notNullable().index();
        tbl.string('password', 100).notNullable().index();
        tbl.string('department').nullable();
      })
      //add to the card                                 //add email, projects, _> projectname: duedate:
      .createTable('student', tbl => {
        tbl.increments();
        tbl.string('name').notNullable();
        tbl.string('email', 100).nullable()
        tbl.string('class').nullable();
      })
      //make a card
      .createTable('date', tbl => {
        tbl.increments();
        tbl.string('date', 10).notNullable();
        tbl.string('time', 10).notNullable();
        tbl.text('desc', 500).notNullable();
        tbl.integer('student_id').unsigned().notNullable()//student on schedule just .join
          .references('id')                                //show as much as possible
          .inTable('student')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');
        tbl.integer('teacher_id').unsigned().notNullable()//teacher on schedule
          .references('id')                               //show as much as possible
          .inTable('teacher')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');
      })
  };

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('date')
  .dropTableIfExists('student')
  .dropTableIfExists('teacher')
};
