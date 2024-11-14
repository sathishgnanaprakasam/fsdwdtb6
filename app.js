// import express
const express = require('express');
const jobsRouter = require('./routes/jobRoutes');

// create an express app
const app = express();

// add middleware to parse JSON
app.use(express.json());

// define the root route
app.use('/api/v1/jobs', jobsRouter);

// export the app
module.exports = app;