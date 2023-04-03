const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyparser = require('body-parser');
const teamsRouter = require('./routes/teams');
const playersRouter = require('./routes/players');
const gamesRouter = require('./routes/games');
const singleTeamRouter = require('./routes/singleteams');
const userId = require('./schemas/userSchema');
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyparser.json());

const port = process.env.PORT || 5500;

mongoose
.connect(process.env.connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log(`DB Connected`))
.catch((error) => console.log(error));

app.use('/', teamsRouter);
app.use('/', playersRouter);
app.get('/login/init', (req, res) => res.send(process.env.googlekey));
app.use('/', gamesRouter)
app.use('/', singleTeamRouter)


app.get('/', (req, res) => res.send('Hello world!'));
const server = app.listen(port, () => console.log(`Server running on port: ${port}`));
