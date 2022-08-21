/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = async function (knex) {
    if (
      await knex.schema.hasTable('users') &&
      await knex.schema.hasTable('activity_logs') &&
      await knex.schema.hasTable('security_settings') &&
      await knex.schema.hasTable('projects') &&
      await knex.schema.hasTable('sections') &&
      await knex.schema.hasTable('tasks')
    ) {
        return true;
    };
    
    // Create database schema.
    await knex.schema.createTable('users', table => {
        table.increments();
        table.string('full_name', 255).notNullable();
        table.date('date_of_birth').notNullable();
        table.string('gender', 10);
        table.string('role', 100);
        table.string('email', 100).notNullable();
        table.string('phone_number', 11);
        table.string('password', 100);
        table.timestamps(true, true, true)
        table.boolean('is_deleted');
    });
    await knex.schema.createTable('activity_logs', table => {
      table.increments();
      table.integer('user_id').references('id').inTable('users').unsigned().notNullable();
      table.text('logs');
      table.timestamp('created_on').defaultTo(knex.fn.now());
      table.timestamp('modified_on').defaultTo(knex.fn.now());
      table.boolean('is_deleted');
    });
    await knex.schema.createTable('security_settings', table => {
      table.increments();
      table.text('json_rule');
      table.integer('user_id').references('id').inTable('users').unsigned().notNullable();
      table.timestamp('created_on').defaultTo(knex.fn.now());
      table.timestamp('modified_on').defaultTo(knex.fn.now());
      table.boolean('is_deleted');
    });
    await knex.schema.createTable('projects', table => {
      table.increments();
      table.integer('user_id').references('id').inTable('users').unsigned().notNullable();
      table.string('project_name', 255).notNullable();
      table.timestamp('created_on').defaultTo(knex.fn.now());
      table.timestamp('modified_on').defaultTo(knex.fn.now());
      table.boolean('is_deleted');
    });
    await knex.schema.createTable('sections', table => {
      table.increments();
      table.string('name', 255).notNullable();
      table.string('description', 255);
      table.integer('project_id').references('id').inTable('projects').unsigned().notNullable();
      table.timestamp('created_on').defaultTo(knex.fn.now());
      table.timestamp('modified_on').defaultTo(knex.fn.now());
      table.boolean('is_deleted');
    })
    await knex.schema.createTable('tasks', table => {
      table.increments();
      table.text('task_name').notNullable();
      table.timestamp('due_date');
      table.integer('section_id').references('id').inTable('sections').unsigned().notNullable();    
      table.timestamp('created_on').defaultTo(knex.fn.now());
      table.timestamp('modified_on').defaultTo(knex.fn.now());
      table.boolean('is_deleted');
      table.boo
    });

  return true;
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.down = async function(knex) {
    await knex.schema.dropTable('users');
    await knex.schema.dropTable('activity_logs');
    await knex.schema.dropTable('security_settings');
    await knex.schema.dropTable('projects');
    await knex.schema.dropTable('sections');
    await knex.schema.dropTable('tasks');
  
    return true;
  };
