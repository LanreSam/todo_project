const { default: knex } = require("knex");

const createAccount = async (req, res, next) => {
    await knex('users').insert({
        full_name: req.body.full_name,
        date_of_birth: req.body.date_of_birth,
        gender: req.body.gender,
        role: req.body.role,
        email: req.body.email,
        phone_number: req.body.phone_number,
        password: req.body.password
    }).then(() => {
        res.status(200).json({message: "Success"});
    }).catch((err) => {
        res.status(500).json({message: err.toString()});
    });

    await res.send(`Added ${full_name} to the DB`);
    next();
};

module.exports = {
    createAccount,
};