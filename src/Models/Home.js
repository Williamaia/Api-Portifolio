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

HomeSchema.pre('save', function(next){
    const url = process.env.URL || 'http://localhost:5000';
    this.photograph = `${url}/files/${decodeURIComponent(this.photograph)}`;
    this.curriculum = `${url}/files/${decodeURIComponent(this.curriculum)}`;
    return next();
})

module.exports = mongoose.model('Home', HomeSchema);