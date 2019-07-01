const mongoose = require('mongoose');

const PortifolioSchema = new mongoose.Schema({
    image: String,
    title: String
});

PortifolioSchema.pre('save', function(next) {
	const url = process.env.URL || 'http://localhost:5000'
  this.image = `${url}/files/${decodeURIComponent(this.image)}`
  return next();
});

module.exports = mongoose.model('Portifolio', PortifolioSchema);