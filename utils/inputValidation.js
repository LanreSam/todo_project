const schemaValidation = require('../utils/schemaValidation.js');

module.exports = 
async () => {
    try {
        const Validation = schemaValidation.validate(data);
        if (Validation.error) {
            return res.send(Validation.error.details[0].message);
        }
        console.log(Validation);
    } catch (err) {
        console.log(err);
        await res.status(500).json({message: err.toString()});
    }
}