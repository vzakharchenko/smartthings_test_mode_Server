var express = require('express');
var https = require('https');
//var http = require('http');
var fs = require('fs');

// This line is from the Node.js HTTPS documentation.
var options = {
  key: fs.readFileSync('./private.key'),
  cert: fs.readFileSync('./cert.cer')
};

// Create a service (the app object is just a callback).
var app = express();

app.get('/prod/lockcode', (req, res) => {
  // const status = { status: 'OK' };
  console.log("request "+req.originalUrl);
  console.log("request headers: "+JSON.stringify(req.headers));
  console.log("request params: "+JSON.stringify(req.params));
  res.send("success");
});

// Create an HTTP service.
// http.createServer(app).listen(80);
// Create an HTTPS service identical to the HTTP service.
https.createServer(options, app).listen(8443);
