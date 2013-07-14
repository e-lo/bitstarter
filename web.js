var fs = require('fs');

var express = require('express');

var app = express.createServer(express.logger());

var indexContents = fs.readFileSync("index.html")

console.log(indexContents.toString();

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
