const { Model } = require('objection');
const environment = process.env.ENVIRONMENT || 'development'
var knexfile = require('./knexfile.js')[environment];
const knex = require("knex")(knexfile);
const validateUserInput = require('../utils/schemaValidation.js');

// Feeds knex to Objection.
Model.knex(knex);

const activity_logs = require('./activity_logs');
class Users extends Model {
    static get tableName(){
        return 'users';
    }
    static get full_nameColumn() {
        return 'full_name';
    }
    static get date_of_birthColumn() {
        return 'date_of_birth';
    }
    static get genderColumn() {
        return 'gender';
    }
    static get roleColumn() {
        return 'role';
    }
    static get emailColumn() {
        return 'email';
    }
    static get phone_numberColumn() {
        return 'phone_number';
    }
    static get passwordColumn() {
        return 'password';
    }

    // static relationMappings = {
    //     logs: {
    //         relation: Model.HasManyRelation,
    //         modelClass: activity_logs,
    //         join: {
    //             from: 'users.id',
    //             to: 'activity_logs.user_id'
    //         }
    //     }
    // }
};

module.exports = Users;