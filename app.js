const express = require("express");
const userRoute = require("./routes/v1/accounts.js");

const app = express();
const PORT = 5000

// Default route
app.use('/api', userRoute);

//default route
app.get('/', (req, res) => {
    res.send(`<h1>Homepage</h1>`)
});

app.listen(PORT, () => {
    console.log(`Server is listening to ${PORT}`);
});