const express = require('express');
const router = express.Router();
const axios = require('axios');


router.get('/players', (req, res) => {
    axios.get('http://data.nba.net/data/10s/prod/v1/2022/players.json')
      .then(response => {
        res.json(response.data);
      })
      .catch(error => {
        res.status(500).send(error.message);
      });
});

module.exports = router;
  