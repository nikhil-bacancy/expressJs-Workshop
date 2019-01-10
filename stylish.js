const path = require('path')
const express = require('express');
const stylus = require('stylus');
const app = express();



app.use(stylus.middleware(process.argv[3] || path.join(__dirname, 'css')))
app.use(express.static(process.argv[3] || path.join(__dirname, 'public') || path.join(__dirname, 'css')))


app.listen(process.argv[2] || 8080);
