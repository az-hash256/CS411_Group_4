const express = require('express');
const router = express.Router();
const axios = require('axios');
const userId = require('../schemas/userSchema');
const jwt = require('jsonwebtoken');

router.post('/users', (req, res) => {
    const userInfo = new userId({
        googlecred: jwt.decode(req.body.credential),
        favoriteTeam: ""
    })

    userInfo.save((err) => {
        if (err) {
          console.log(err);
          res.status(500).send('Error saving user to database');
        } else {
          console.log('User saved to database');
          res.status(200).send('User saved to database');
        }
      });
})

module.exports = router;
