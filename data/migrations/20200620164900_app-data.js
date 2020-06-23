
exports.up = function(knex) {
    return knex.schema
      .createTable('teachers', tbl => {
        tbl.increments();
        tbl.string('username', 100).notNullable().index();
        tbl.string('password', 100).notNullable().index();
        tbl.string('class').nullable();
      })
      //add to the card                                 //add email, projects, _> projectname: duedate:
      .createTable('students', tbl => {
        tbl.increments();
        tbl.string('name').notNullable();
        tbl.string('email', 100).nullable();
        tbl.string('class').nullable();
        tbl.string('teacher_id').unsigned().notNullable()
        .references('id')                              
        .inTable('teacher')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      })
      
      .createTable('projects', tbl => {
        tbl.string('project_name').notNullable();
        tbl.string('student_name').notNullable().unsigned()
        .references('name')                              
        .inTable('student')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
        tbl.string('project_type').nullable();
        tbl.string('desc').nullable();
        tbl.string('completed').nullable()
      })
      
  };

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('projects')
  .dropTableIfExists('students')
  .dropTableIfExists('teachers')
};
