// index.js
require('dotenv').config();
var express = require('express');
var app = express();

// enable CORS
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 }));

// Static files
app.use(express.static('public'));

// Basic routing
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// API endpoint for /api/hello
app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API' });
});

// API endpoint for /api/whoami
app.get('/api/whoami', function (req, res) {
  // Get IP address
  const ipAddress = req.ip;

  // Get preferred language
  const language = req.headers['accept-language'];

  // Get software information
  const software = req.headers['user-agent'];

  // Construct the response object
  const response = {
    ipaddress: ipAddress,
    language: language,
    software: software
  };

  // Send the response as JSON
  res.json(response);
});

// Listen for requests
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
