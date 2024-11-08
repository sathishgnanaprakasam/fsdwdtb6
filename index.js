// import express from 'express';
const express = require('express');

// create an express application
const app = express();

// add a built-in middleware to parse the request body
app.use(express.json());

// add a custom middleware to log the request
app.use((request, response, next) => {
    console.log(`Request URL: ${request.url}`);
    console.log(`Request Method: ${request.method}`);
    console.log(`Request Headers: ${JSON.stringify(request.headers)}`);
    console.log(`Request Query: ${JSON.stringify(request.query)}`);
    console.log(`Request Body: ${JSON.stringify(request.body)}`);
    console.log(`Request Params: ${JSON.stringify(request.params)}`);
    console.log(`Request Cookies: ${JSON.stringify(request.cookies)}`);

    next();
});

// set up a simple route
app.get('/:id', (request, response) => {
    response.json({ message: 'Welcome to the express server' });
});

// listen for requests
app.listen(3001, () => {
    console.log('Server is running on port http://localhost:3001');
});