const express = require('express');
const router = express.Router();
const axios = require('axios');

router.post('/api/singleteam', async (req, res) => {
  try {
    const teamId = req.body.teamId;
    const options = {
        method: 'GET',
        url: 'https://api-nba-v1.p.rapidapi.com/players',
        params: {team: teamId, season: '2022'},
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
})

module.exports = router;