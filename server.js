const express = require('express');
const app = express();
const port = 5000;

app.use('/',function(req,res){
res.send('hello my world');
});
app.listen(port);
console.log (' Running on port :' + port);

