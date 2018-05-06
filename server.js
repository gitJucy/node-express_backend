var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Task = require('./api/models/todoListModel'),
    bodyParser = require('body-parser');
//connect to mongoose
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/apitest');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

var routes = require('./api/routes/todoListRoutes');
routes(app);


app.listen(port);

console.log('running on ' + port);