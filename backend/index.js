const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyparser = require('body-parser');
require("dotenv").config();

const app = express();

app.use(express.json());

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

const options = {
  method: 'GET',
  url: 'https://api-nba-v1.p.rapidapi.com/teams',
  headers: {
    'X-RapidAPI-Key': '3a9f9cf62fmsh97332515ed2ce66p194847jsnb213224fadeb',
    'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
  }
};
axios.request(options).then(response => {
	console.log(response.data);
}).catch(error => {
	console.error(error);
});

app.get('/', (req, res) => res.send('Hello world!'));
const server = app.listen(port, () => console.log(`Server running on port: ${port}`));
