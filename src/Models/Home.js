const mongoose = require('mongoose');
const HomeSchema = new mongoose.Schema({
    photograph: String,
    name: String,
    about: String,
    curriculum: String,
    username: String,
    email: String,
    phone: String
});

module.exports = mongoose.model('Home', HomeSchema);