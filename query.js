const express = require('express');
const app = express();
app.get('/search', function(req,res){
	res.send(req.query);
});
app.listen(process.argv[2]);