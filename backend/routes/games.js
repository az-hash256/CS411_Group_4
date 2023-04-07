const axios = require('axios');
const express = require('express');
const router = express.Router();
const today = new Date();
const todayString = today.toISOString().slice(0, 10);
const end = new Date(today);
end.setDate(end.getDate() + 7);
const endString = end.toISOString().slice(0, 10);

router.get('/games', async (req, res) => {
    axios.get('https://app.ticketmaster.com/discovery/v2/events.json', {
        params: {
        apikey: process.env.TMASTER_KEY,
        keyword: 'nba',
        startDateTime: `${todayString}T00:00:00Z`,
        endDateTime: `${endString}T00:00:00Z`,
        classificationName: 'sports',
        segmentName: 'sports'
        }
    })  
    .then(response => {
    console.log(todayString)
    res.json(response.data);
    })
    .catch(error => {
    console.error(error);
    });
})

module.exports = router;
