const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const teamsRouter = require('./routes/teams');
const playersRouter = require('./routes/players');
const gamesRouter = require('./routes/games');
const admin = require('firebase-admin');
const serviceAccount = require('./cs411-382322-firebase-adminsdk-d6sqr-5cb928a02e.json')
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
const authRouter = require('./routes/auth');
const singleTeamRouter = require('./routes/singleteams');
require("dotenv").config();


const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyparser.json());

const port = process.env.PORT || 5500;

app.use('/auth', authRouter);
app.use('/', teamsRouter);
app.use('/', playersRouter);
app.get('/login/init', (req, res) => res.send(process.env.googlekey));
app.use('/', gamesRouter)
app.use('/', singleTeamRouter)

app.get('/', (req, res) => res.send('Hello world!'));
const server = app.listen(port, () => console.log(`Server running on port: ${port}`));
