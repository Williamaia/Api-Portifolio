const mongoose = require ('mongoose');

const SobreSchema = new mongoose.Schema({
    title: String,
    subtitle: String,
    description: String
});

module.exports = mongoose.model('Sobre', SobreSchema);