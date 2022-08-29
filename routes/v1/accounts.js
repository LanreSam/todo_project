const express = require('express');
const router = express.Router();
const { verifyToken } = require('../../middleware/auth.js');
require("dotenv").config();

const { 
    createAccount,
    deleteAccount,
    getAccounts,
    getUser,
    updateAccount,
} = require("../../controllers/userControllers.js");

router.post('/v1/createAccount', createAccount);
router.post('/v1/deleteAccount/:id', verifyToken, deleteAccount); //can take an array
router.get('/v1/getAccounts', verifyToken, getAccounts);
router.put('/v1/updateAccount/:id', verifyToken, updateAccount);
// router.put('/v1/updateAccount/:id', updateAccount)
router.get('/v1/getUser/:id', verifyToken, getUser)


module.exports =  router;