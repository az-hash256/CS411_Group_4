const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyparser = require('body-parser');
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

app.get('/api/teams', async (req, res) => {
    try {
      const options = {
        method: 'GET',
        url: 'https://api-nba-v1.p.rapidapi.com/teams',
        headers: {
          'X-RapidAPI-Key': process.env.RAPID_KEY,
          'X-RapidAPI-Host': process.env.RAPID_HOST
        }
      };
      const response = await axios.request(options);
      const data = response.data;
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Something went wrong' });
    }
});

app.get('/', (req, res) => res.send('Hello world!'));
const server = app.listen(port, () => console.log(`Server running on port: ${port}`));
