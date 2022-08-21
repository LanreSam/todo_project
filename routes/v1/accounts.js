const express = require('express');
const router = express.Router();

const { 
    createAccount, 
    deleteAccount,
    getAccounts,
    updateAccount,
} = require("../../controllers/userControllers.js");

router.post('/v1/createAccount', createAccount);
router.post('/v1/deleteAccount/:id', deleteAccount);
router.get('/v1/getAccounts', getAccounts);
router.put('/v1/updateAccount/:id', updateAccount)


module.exports =  router;