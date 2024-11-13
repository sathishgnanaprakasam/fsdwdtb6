// import express
const express = require('express');
const jobsRouter = require('./routes/jobRoutes');

// create an express app
const app = express();

// define the root route
app.use('/', jobsRouter);

// export the app
module.exports = app;