const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        googleCred: String,
        fbEmail: String,
        favoriteTeam: String,
    }
);

module.exports = mongoose.model("UserInfo", userSchema)