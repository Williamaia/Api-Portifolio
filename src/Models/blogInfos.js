const mongoose = require('mongoose');
const blogInfosSchema = new mongoose.Schema({
    resume: String,
    image: String,
    link: String
});


blogInfosSchema.pre('save', function(next){ 
    const url = process.env.URL || 'http://localhost:5000'; 
    this.image = `${url}/files/${decodeURIComponent(this.image)}`;
    return next() 
});


module.exports = mongoose.model('blogInfos', blogInfosSchema);