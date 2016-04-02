var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var app = express();

var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/bear-app')

var routes = require('./config/routes');
var Bear = require('./models/bear')

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('views', './views');
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');



app.use(routes);
app.listen(3000);
