var express = require('express');

var app = express();

app.use(express.static('public'));
app.get('/', function (req, res) {
  console.log('Readable web server is up on port 8000')
});

app.listen(8000);
