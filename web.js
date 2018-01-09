var express = require('express');
var app = express();

app.use(express.static('images'));
app.use(express.static('css'));
app.use(express.static('scripts'));
app.use(express.static('.'));

var port = process.env.PORT || 9100;
app.listen(port);

