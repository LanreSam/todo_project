const express = require("express");
const bodyParser = require('body-parser');
const userRoute = require("./routes/v1/accounts.js");
const authUser= require('./routes/v1/auth.js')


const app = express();
const PORT = process.env.PORT || 5000

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Default route
app.use('/api', userRoute);
app.use('/api', authUser);


app.listen(PORT, () => {
    console.log(`Server is listening to ${PORT}`);
});