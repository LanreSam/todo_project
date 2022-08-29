const Users = require('../models/users.js');
const jwt = require('jsonwebtoken');
const inputValidation = require('../utils/inputValidation.js');
const passwordEncryption = require('../utils/passwordEncryption.js');

// This is the create account endpoint || CREATE
const createAccount = async (req, res, next) => {
    const data = req.body;
    try {
        // Validate if user exist in our database
        const email = data.email;
        const oldUser = await Users.query().findOne({ email });
    
        if (oldUser) {
          return res.status(409).send("User Already Exist. Please Login");
          // return res.redirect('http://localhost:5000/api/v1/login');
        }else{
            inputValidation;
        }

        const encryptedPassword = await passwordEncryption(data);
        
        const user = await Users.query().insert({
            full_name: data.full_name,
            date_of_birth: data.date_of_birth,
            gender: data.gender,
            role: data.role,
            email: email,
            phone_number: data.phone_number,
            password: encryptedPassword
        });

        // Create token
        const token = jwt.sign(
            { user_id: user._id, email },
            process.env.TOKEN_KEY,
            {
              expiresIn: "2h",
            }
        );
    
        // save user token
        user.token = token;
        res.status(200).json({message: `Added ${email} to the DB`, error: "null"});
    } catch (err) {
        res.status(500).json({message: err.toString()});
    }
};

//Gets all users from the DB || READ
const getAccounts = async (req, res, next) => {
    try {
        const getAllUsers = await Users.query();
        res.send(getAllUsers)
    } catch (err) {
        res.status(500).json({message: "Error fetching accounts", error: err});
    }
};

// Get a single user
const getUser = async (req, res, next) => {
    try {
        const userId = req.params.id;
        const findUser = await Users.query().findById(userId)

        //Checks if the user exists in the DB
        if (!findUser) {
            return res.status(500).json({status: 500, message: 'User does not exist'})
        };
        res.send(findUser)
    } catch (err) {
        res.status(500).json({message: "Error finding user", error: err});
    }

    next();
}

// Update the user's account || UPDATE
const updateAccount = async (req, res, next) => {
    const userId = req.params.id;
    const data = req.body;
    const { password } = data;
    const encryptedPassword =  await passwordEncryption(password);   
    if (password != encryptedPassword) {
        return encryptedPassword
    }
    
    const changes = data;
    
    const update = Users.query().where('id', userId).update(changes);
    await update.then(() => {
        return res.status(200).json({message: `User with id:${userId} has been updated`, error: "null"});
    }).catch((err) => {
        return res.status(500).json({message: "Error updating account", error: err});
    })
};

// This is the delete account function || DELETE
const deleteAccount = async (req, res, next) => {
    userId = await req.params.id;
    await Users.query().delete().where('id', userId).then(() => {
        res.status(200).json({message: "Account deleted", error: "null"});
    }).catch((err) => {
        res.status(500).json({message: err.toString()});
    })

    next();
}

// Export all the methods here
module.exports = {
    createAccount,
    deleteAccount,
    getAccounts,
    getUser,
    updateAccount,
};