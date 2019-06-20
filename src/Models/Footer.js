const mongoose = require("mongoose");

const FooterSchema = new mongoose.Schema({
   name: String,
   job: String,
   email: String,
   tel: String 
});

module.exports = mongoose.model("Footer", FooterSchema);