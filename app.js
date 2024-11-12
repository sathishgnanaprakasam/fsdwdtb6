// import express from 'express';
const express = require('express');
const logger = require('./middleware/logger');
const jobRouter = require('./routes/jobRoutes');

// create an express application
const app = express();

// add a built-in middleware to parse the request body
app.use(express.json());

// add a custom middleware to log the request
app.use(logger);

// set up a simple route
app.use('/jobs', jobRouter);

module.exports = app;