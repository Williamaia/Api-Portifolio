const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
    title: String,
    subtitle: String,
    message: String,
    email: String,
    redes: String,
    messagerede: String
});

module.exports = mongoose.model('Contact', ContactSchema);