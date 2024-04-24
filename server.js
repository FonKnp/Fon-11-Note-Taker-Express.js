// require module needed
const express = require('express');
const path = require('path');
const fs = require('fs');
const uuid = require('uuid');

// create express app
const app = express();

// middleware for parsing json 
app.use(express.json());