const express = require('express');
const router = express.Router();
const { 
    test,
    test2
} = require("../../controllers/userControllers.js");


router.get('/v1/test', test);
router.get('/v1/test2', test2);


module.exports =  router;