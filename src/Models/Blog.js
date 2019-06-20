const mongoose = require('mongoose');
const BlogSchema = new mongoose.Schema({
    user: String,
    title: String,
    description: String,
    images: String
});


module.exports = mongoose.model('Blog', BlogSchema);