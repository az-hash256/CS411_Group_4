const admin = require('firebase-admin');
const serviceAccount = require('./cs411-382322-firebase-adminsdk-d6sqr-5cb928a02e.json')
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://cs411-382322.firebaseio.com'
});


module.exports = { admin };