import express from "express";
import userRoute from "./routes/users.js";

const app = express();
const PORT = 5000

app.use('/users', userRoute);

app.get('/', (req, res) => {res.send(`<h1>Homepage</h1>`)})

app.listen(PORT, () => {
    console.log(`Server is listening to ${PORT}`);
});