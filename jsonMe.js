const express = require('express');
const fs = require('fs');
const app = express();





app.get('/books',function(req,res) {

	fs.readFile(process.argv[3],function (err,data) {
			if (err) return res.sendStatus(500);
        try {
          books = JSON.parse(data)
        } catch (e) {
          res.sendStatus(500)
        }
        res.json(books)
	})

}).listen(process.argv[2] || 8080)



// app.get('/books', function(req, res){
//       const filename = process.argv[3]
//       fs.readFile(filename, function(e, data) {
//         if (e) return res.sendStatus(500)
//         try {
//           books = JSON.parse(data)
//         } catch (e) {
//           res.sendStatus(500)
//         }
//         res.json(books)
//       })
//     })

//     app.listen(process.argv[2])
