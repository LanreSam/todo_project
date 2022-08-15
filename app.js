const express = require("express");
var mysql = require('mysql2');
const userRoute = require("./routes/v1/users.js");

const app = express();
const PORT = 5000

app.use('/', userRoute);

app.get('/', (req, res) => {res.send(`<h1>Homepage</h1>`)})

app.listen(PORT, () => {
    console.log(`Server is listening to ${PORT}`);
});