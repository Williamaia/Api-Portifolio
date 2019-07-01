const mongoose = require('mongoose');
const SkillsSchema = new mongoose.Schema({
    title: String,
    porcentagem: Number
}); 

module.exports = mongoose.model('Skills', SkillsSchema);