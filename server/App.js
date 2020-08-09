const express = require('express');
const app=express();
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/task',{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
});
mongoose.Promise=global.Promise;

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
app.use('/api/signUp',require('./router/signUp'));
app.use('/api/signIn',require('./router/signIn'));
app.use('/api/success',require('./router/success'))

module.exports = app;