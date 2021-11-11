const express = require('express');
const path = require('path')
require('dotenv').config();
const port = process.env.PORT || 3000;

const app = express();
app.use(express.static(__dirname + '/static'))

app.get('/', ((req, res) => {
  res.sendFile(path.join(`${__dirname}`,'index.html'))
}));

app.get('/localTest', ((req, res) => {
  res.sendFile(path.join(`${__dirname}`,'localTest.html'))
}));

app.listen(port, ()=> console.log(`server started on port ${port}.`));