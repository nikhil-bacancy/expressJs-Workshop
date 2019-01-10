const express = require('express');
const app = express();

app.get('/search',function (req,res) {
		var query = req.query;
		res.send(query)
}).listen(process.argv[2] || 8080)
