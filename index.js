// import express from 'express';
const express = require('express');

// create an express application
const app = express();

// set up a simple route
app.get('/', (request, response) => {
    response.json({ message: 'Welcome to the express server' });
});

// listen for requests
app.listen(3001, () => {
    console.log('Server is running on port http://localhost:3001');
});