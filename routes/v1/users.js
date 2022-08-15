const express = require('express');
const router = express.Router();
const { test } = require("../../controllers/userControllers.js");


router.get('/api/v1/test', test);


module.exports =  router;