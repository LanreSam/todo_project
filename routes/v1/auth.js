const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth.js');
require("dotenv").config();

const { login } = require('../../controllers/authControllers.js')


router.post('/v1/auths', auth, login)

module.exports = router;