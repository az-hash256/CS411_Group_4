const express = require('express');

const router = express.Router();

const passport = require('passport');
const GoogleStrategy = require('passport-google-oidc');

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.get('/login/federated/google', passport.authenticate('google'));

module.exports = router;