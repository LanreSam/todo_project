const express = require("express");
const bodyParser = require('body-parser');
const userRoute = require("./routes/v1/accounts.js");

const app = express();
const PORT = 5000

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Default route
app.use('/api', userRoute);

//default route // TEST
app.get('/', (req, res) => {
    res.send(`<h1>Homepage</h1>`)
});

app.listen(PORT, () => {
    console.log(`Server is listening to ${PORT}`);
});