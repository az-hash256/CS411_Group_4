const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        googleCred: String,
        favoriteTeam: String,
    }
);

module.exports = mongoose.model("UserInfo", userSchema)