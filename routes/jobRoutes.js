// import express
const express = require('express');

// create an express router
const jobsRouter = express.Router();

jobsRouter.get('/', (request, response) => {
    response.json({ message: 'Hello, World!' });
});

// export the router
module.exports = jobsRouter;