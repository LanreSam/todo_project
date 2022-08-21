const Users = require('../models/users.js');


// This is the create account endpoint || CREATE
const createAccount = async (req, res, next) => {
    await Users.query().insert({
        full_name: req.body.full_name,
        date_of_birth: req.body.date_of_birth,
        gender: req.body.gender,
        role: req.body.role,
        email: req.body.email,
        phone_number: req.body.phone_number,
        password: req.body.password
    }).then(() => {
        res.status(200).json({message: `Added ${req.body.full_name} to the DB`, error: "null"});
    }).catch((err) => {
        res.status(500).json({message: err.toString()});
    });
    
    next();
};

//Gets all users from the DB || I still need to work more on this || READ
const getAccounts = async (req, res, next) => {
    try {
        const getAllUsers = await Users.query();
        res.send(getAllUsers)
    } catch (err) {
        res.status(500).json({message: "Error fetching accounts", error: err});
    }

    next()
};

// Update the user's account
const updateAccount = async (req, res, next) => {
    const userId = req.params.id;
    const changes = req.body;
    const update = knex('users').where('id', userId).update(changes);
    await update.then(() => {
        res.status(200).json({message: `${req.body.full_name} has been updated`, error: "null"});
    }).catch((err) => {
        res.status(500).json({message: "Error updating account", error: err});
    })
};

// This is the delete account function
const deleteAccount = async (req, res, next) => {
    userId = req.params.id;
    await knex('users').where('id', userId).del().then(() => {
        res.status(200).json({message: "Account deleted", error: "null"});
    }).catch((err) => {
        res.status(500).json({message: err.toString()});
    })

    next();
}

// Exports all the functions fro use in another file
module.exports = {
    createAccount,
    deleteAccount,
    getAccounts,
    updateAccount,
};