
var express = require('express');
var platform = require('platform');
var app = express();

app.route('/api/whoami').get(function (req, res) {
  
  var agent = platform.parse(req.headers['user-agent']);
  
  var result = {
    
    ipaddress: req.headers['x-forwarded-for'],
    language: req.headers['accept-language'].split(';')[0],
    software: agent.os.toString()
  }
  
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.write(JSON.stringify(result));
  res.end();
});

app.listen(process.env.PORT || 8080);