const express = require('express');
const path = require('path')
const http = require('http');
require('dotenv').config();
const port = process.env.PORT || 3000;

const app = express();

app.get('/', ((req, res) => {
  res.sendFile(path.join(`${__dirname}`,'index.html'))
}));

app.listen(port, ()=> console.log(`server started on port ${port}.`));