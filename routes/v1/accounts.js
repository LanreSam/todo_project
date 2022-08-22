const express = require('express');
const router = express.Router();
require("dotenv").config();


const { 
    createAccount, 
    login,
    deleteAccount,
    getAccounts,
    getUser,
    updateAccount,
} = require("../../controllers/userControllers.js");

router.post('/v1/createAccount', createAccount);
router.post('/v1/login', login);
router.post('/v1/deleteAccount/:id', deleteAccount);
router.get('/v1/getAccounts', getAccounts);
router.put('/v1/updateAccount/:id', updateAccount);
router.put('/v1/updateAccount/:id', updateAccount)
router.get('/v1/getUser/:id', getUser)


module.exports =  router;