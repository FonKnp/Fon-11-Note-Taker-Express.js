// require module needed
const express = require('express');
const path = require('path');
const fs = require('fs');
const uuid = require('uuid');

// require html and api routes
const htmlRoutes = require('./routes/indexRoute');
const apiRoutes = require('./routes/apiRoutes');

// create express app
const app = express();

// middleware for parsing json 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));