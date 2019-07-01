const mongoose = require ('mongoose');

const SobreSchema = new mongoose.Schema({
    title: String,
    subtitlebio: String,
    biografia: String,
    subtitleprof: String,
    profissao: String
});

module.exports = mongoose.model('Sobre', SobreSchema);