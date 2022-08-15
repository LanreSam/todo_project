/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 const mysql = require('mysql2');

exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id');
    table.string('full_name', 255).notNullable();
    table.date('date_of_birth').notNullable();
    table.string('gender', 10);
    table.string('role', 100);
    table.string('email', 100).unique().notNullable();
    table.string('phone_number', 11);
    table.string('password', 100);
    table.timestamp('created_on').defaultTo(knex.fn.now());
    table.timestamp('modified_on').defaultTo(knex.fn.now());
    table.boolean('is_deleted');
  })
  .createTable('activity_logs', (table) => {
    table.increments('id');
    table.integer('user_id').references(table.increments('id')).inTable('users');
    table.text('logs');
    table.timestamp('created_on').defaultTo(knex.fn.now());
    table.timestamp('modified_on').defaultTo(knex.fn.now());
    table.boolean('is_deleted');
  })
  .createTable('security_settings', (table) => {
    table.increments('id');
    table.text('json_rule');
    table.integer('user_id').references('id').inTable('users');
    table.timestamp('created_on').defaultTo(knex.fn.now());
    table.timestamp('modified_on').defaultTo(knex.fn.now());
    table.boolean('is_deleted');
  })
  .createTable('projects', (table) => {
    table.increments('id');
    table.integer('user_id').references('id').inTable('users');
    table.string('project_name', 255).notNullable();
    table.timestamp('created_on').defaultTo(knex.fn.now());
    table.timestamp('modified_on').defaultTo(knex.fn.now());
    table.boolean('is_deleted');
  })
  .createTable('sections', (table) => {
    table.increments('id');
    table.string('name', 255).notNullable();
    table.string('description', 255);
    table.integer('project_id').references('id').inTable('projects');
    table.timestamp('created_on').defaultTo(knex.fn.now());
    table.timestamp('modified_on').defaultTo(knex.fn.now());
    table.boolean('is_deleted');
  })
  .createTable('tasks', (table) => {
    table.increments('id');
    table.text('task_name').notNullable();
    table.timestamp('due_date')
    table.boolean('section_id').references('id').inTable('sections')    
    table.timestamp('created_on').defaultTo(knex.fn.now());
    table.timestamp('modified_on').defaultTo(knex.fn.now());
    table.boolean('is_deleted');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('users')
  .dropTableIfExists('activity_logs')
  .dropTableIfExists('security_settings')
  .dropTableIfExists('projects')
  .dropTableIfExists('sections')
  .dropTableIfExists('tasks')
};
