const Users = require('../models/users.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const inputValidation = require('../utils/inputValidation.js');

// login controller for users
const login = async (req, res, next) => {
    try {
        // Get user input
        const data = req.body
        const { email, password } = data;
        
        //Validate users' input against the schema
        inputValidation

        // Validate user input
        if (!(email && password)) {
            res.status(400).send("All input is required");
        }
        // Validate if user exist in our database
        const user = await Users.query().findOne({ email });

        if (user && (await bcrypt.compare(password, user.password))) {
            // Create token
            delete user.password;
            const token = jwt.sign(
                { user },
                process.env.TOKEN_KEY,
                {
                    expiresIn: "2h",
                }
            );

            // save user token
            user.token = token;
            console.log(token);

            // user
            await res.status(200).json(user.full_name);
            res.end();
        }
        else{
            await res.status(400).send("Invalid Credentials");
        }
    } catch (err) {
        await res.status(500).send({message: "Error occured"});
        console.log(err);
    }

    // next();
}

module.exports = { login }