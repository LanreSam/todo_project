const { Model } = require('objection');
const environment = process.env.ENVIRONMENT || 'development'
var knexfile = require('./knexfile.js')[environment];
const knex = require("knex")(knexfile);

// Feeds knex to Objection.
Model.knex(knex);

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

    static get jsonSchema(){
        return {
            type: 'object',
            required: ['full_name', 'date_of_birth', 'gender', 'role', 'email', 'phone_number'],
            properties: {
                id: { type: 'integer' },
                full_name: { type: 'string', minLength: 1, maxLength: 255 },
                date_of_birth: { type: "string", pattern: "(((19|20)([2468][048]|[13579][26]|0[48])|2000)[/-]02[/-]29|((19|20)[0-9]{2}[/-](0[469]|11)[/-](0[1-9]|[12][0-9]|30)|(19|20)[0-9]{2}[/-](0[13578]|1[02])[/-](0[1-9]|[12][0-9]|3[01])|(19|20)[0-9]{2}[/-]02[/-](0[1-9]|1[0-9]|2[0-8])))"},
                gender: { type: 'string', minLength: 1, maxLength: 10 },
                role: { type: 'string', minLength: 1, maxLength: 100 },
                email: { type: 'string', pattern: "^\\S+@\\S+\\.\\S+$",minLength: 6, maxLength: 100 },
                phone_number: { type: 'string', minLength: 11, maxLength: 11 }
            }
        }
    } 
};

module.exports = Users;