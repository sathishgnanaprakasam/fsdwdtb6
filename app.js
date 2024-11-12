// import express from 'express';
const express = require('express');
const logger = require('./middleware/logger');

// create an express application
const app = express();

// add a built-in middleware to parse the request body
app.use(express.json());

// add a custom middleware to log the request
app.use(logger);

// set up a simple route
app.get('/hello', (request, response) => {
    response.send('Hello from GET');
});

app.post('/hello', (request, response) => {
    response.send('Hello from POST');
});

app.get('/world', (request, response) => {
    response.send('World from GET');
});

module.exports = app;