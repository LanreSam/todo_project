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


//default route // TEST
app.post('/test', (req, res, next) => {
    const Joi = require('joi');
  
    const data = req.body;
  
    const schema = Joi.object({ full_name: Joi.string().min(6).required(),
      email: Joi.string().email().required(),
      //phone: Joi.string().regex(/^\d{3}-\d{3}-\d{4}$/).required(),
      birthday: Joi.date().max('1-1-2004').iso()
    })

    try {
        const Validation = schema.validate(data);
        res.send(Validation);
    } catch (err) {
        res.status(500).json({message: "An error occured"})
    }

    next();
});

app.listen(PORT, () => {
    console.log(`Server is listening to ${PORT}`);
});