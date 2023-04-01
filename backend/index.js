const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyparser = require('body-parser');
const teamsRouter = require('./routes/teams');
const playersRouter = require('./routes/players');
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5500;

mongoose
.connect(process.env.connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log(`DB Connected`))
.catch((error) => console.log(error));


app.use('/api/teams', teamsRouter);
app.use('/', playersRouter);
app.get('/login/init', (req, res) => res.send(process.env.googlekey));

app.get('/', (req, res) => res.send('Hello world!'));
const server = app.listen(port, () => console.log(`Server running on port: ${port}`));
