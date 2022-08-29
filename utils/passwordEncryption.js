const bcrypt = require('bcryptjs');

module.exports =
async (data) => {
    //Encrypt user password
    const password = data.password;
    return bcrypt.hash(password, 10);
}