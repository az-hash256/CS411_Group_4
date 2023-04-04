const express = require('express');
const router = express.Router();

const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.googlekey);
const { admin } = require('../firebase');

async function verifyToken(idToken) {
  const ticket = await client.verifyIdToken({
    idToken: idToken,
    audience: process.env.googlekey
  });
  const payload = ticket.getPayload();
  const userId = payload['sub'];
  const email = payload['email'];
  const name = payload['name'];
  const pictureUrl = payload['picture'];
  return { userId, email, name, pictureUrl };
}

router.post('/google', async (req, res) => {
  const idToken = req.body.idToken;
  const { userId } = await verifyToken(idToken);

  try {
    const token = await admin.auth().createCustomToken(userId);
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Error generating token.' });
  }
});

module.exports = router;