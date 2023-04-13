const express = require('express');
const router = express.Router();
const { auth } = require('firebase-admin');

// Middleware to check if user is authenticated
const isAuthenticated = (req, res, next) => {
  const headerToken = req.headers.authorization;
  if (headerToken) {
    const token = headerToken.split('Bearer ')[1];
    auth().verifyIdToken(token)
      .then((decodedToken) => {
        req.user = decodedToken;
        next();
      })
      .catch((error) => {
        res.status(401).json({ message: 'Unauthorized' });
      });
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
};

router.post('/logout', isAuthenticated, async (req, res) => {
  const uid = req.body.idToken;
  try {
    await auth().revokeRefreshTokens(uid);
    res.json({ message: 'Successfully logged out.' });
  } catch (error) {
    res.status(500).json({ message: 'Error logging out.' });
  }
});

module.exports = router;