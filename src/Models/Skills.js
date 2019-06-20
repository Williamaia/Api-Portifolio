const mongoose = require('mongoose');
const SkillsSchema = new mongoose.Schema({
    title: String
}); 

module.exports = mongoose.model('Skills', SkillsSchema);