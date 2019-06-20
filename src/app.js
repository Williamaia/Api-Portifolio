const express = require ("express");
const mongoose = require ("mongoose");
const app = express();
const cors = require('cors');
const routes = require('./routes');

//mongoose.connect("mongodb+srv://williamaia:9027@cluster0-4loj9.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true })
mongoose.connect("mongodb://localhost:27017/node-api", {
  useNewUrlParser: true
});


app.use(cors());
app.use(express.json());
app.use(routes);
app.use("/", (req, res) => {
    res.send('Ok');
})

app.listen(5000);