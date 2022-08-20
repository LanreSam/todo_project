const express = require('express');
const router = express.Router();
// const knex = require('knex')['../../models/knexfile']

const { 
    createAccount,
} = require("../../controllers/userControllers.js");

router.post('/v1/createAccount', createAccount);


module.exports =  router;