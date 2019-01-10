const express = require('express');
const crypto =  require('crypto');
const app = express()


// app.param('id', function (req, res, next, id) {
//   req.id = id
//   next()
// })


app.put('/message/:id',function (req,res) {

		var id = req.params.id
    var str = crypto.createHash('sha1')
      .update(new Date().toDateString() + id)
      .digest('hex')

      res.send(str);
}).listen(process.argv[2] || 8080);
