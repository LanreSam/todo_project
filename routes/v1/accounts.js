const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth.js');
require("dotenv").config();

const { 
    createAccount,
    deleteAccount,
    getAccounts,
    getUser,
    updateAccount,
} = require("../../controllers/userControllers.js");

router.post('/v1/createAccount', createAccount);
router.post('/v1/deleteAccount/:id', auth, deleteAccount); //can take an array
router.get('/v1/getAccounts',auth, getAccounts);
router.put('/v1/updateAccount/:id',auth, updateAccount);
router.put('/v1/updateAccount/:id', updateAccount)
router.get('/v1/getUser/:id',auth, getUser)


module.exports =  router;