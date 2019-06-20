const mongoose = require('mongoose');
const PortifolioSchema = new mongoose.Schema({
    title: String,
    image: String
});

module.exports = mongoose.model('Portifolio', PortifolioSchema);