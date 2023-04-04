const express = require('express');
const router = express.Router();
const axios = require('axios');
const userId = require('./schemas/userSchema');

router.post('/', (req, res) => {
    const userInfo = new userId({
        googlecred: req.body.credential,
        favoriteTeam: ""
    })
})