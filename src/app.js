const express = require ('express');
const mongoose = require ('mongoose');
const app = express();
const cors = require('cors');
const path = require('path');
//const server = require('http');

//mongoose.connect("mongodb+srv://Portifolio:portifolio@cluster0-4loj9.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true })

mongoose.connect("mongodb://localhost:27017/node-api", {
  useNewUrlParser: true
});

app.use('/files', express.static(path.resolve(__dirname, "..", 'uploads')));
app.use(cors());
app.use(express.json());
app.use(require('./routes'));


app.listen(5000);