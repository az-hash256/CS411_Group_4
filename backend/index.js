const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyparser = require('body-parser');
const passport = require('passport');
const teamsRouter = require('./routes/teams');
const authRouter = require('./routes/auth');
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

// create a mongoDB db and connect to it
// set up port

// use this as reference

// Store PORT variable in .env file
// connection variable is url to db, also store in .env


const port = process.env.PORT || 5500;

/*
mongoose
.connect(process.env.connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log(`DB Connected`))
.catch((error) => console.log(error));
*/
const axios = require("axios");
app.use('/api/teams', teamsRouter);
app.use('/', authRouter);

app.get('/', (req, res) => res.send('Hello world!'));
const server = app.listen(port, () => console.log(`Server running on port: ${port}`));
