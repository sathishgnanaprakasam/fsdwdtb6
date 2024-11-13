// import express
const express = require('express');

// create an express app
const app = express();

// define the root route
app.get('/', (request, response) => {
    response.json({ message: 'Hello, World!' });
});

// export the app
module.exports = app;