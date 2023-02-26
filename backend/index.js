const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyparser = require('body-parser');
require("dotenv").config();

const app = express();


// create a mongoDB db and connect to it
// set up port

// use this as reference

// Store PORT variable in .env file
// connection variable is url to db, also store in .env
/*

const port = process.env.PORT || 5500;


mongoose
.connect(process.env.connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log(`DB Connected`))
.catch((error) => console.log(error));

app.get('/', (req, res) => res.send('Hello world!'));
const server = app.listen(port, () => console.log(`Server running on port: ${port}`));
*/
