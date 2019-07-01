const mongoose = require('mongoose');
const homeInfosSchema = new mongoose.Schema({
    title: String,
    infoone: String,
    infotwo: String
});

module.exports = mongoose.model('homeInfos', homeInfosSchema);