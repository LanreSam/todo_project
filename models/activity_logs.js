const { Model } = require('objection');
const environment = process.env.ENVIRONMENT || 'development'
var knexfile = require('./knexfile.js')[environment];
const knex = require("knex")(knexfile);

// Feeds knex to Objection.
Model.knex(knex);

class activityLogs extends Model{
    static get tableName(){
        return 'activity_logs';
    }

    
};