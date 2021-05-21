const express = require('express');
const router = require('./utils/router');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');

const mongoConnection = process.env.MONGO_URI
mongoose.connect(mongoConnection, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
}, () => console.log('Connected to database'));


app.use(cors());
app.use(express.json());
app.use(router);

app.listen(process.env.PORT || 3333, (req, res) => {
  console.log("Server running")
});