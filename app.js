// import express
const express = require('express');
const jobsRouter = require('./routes/jobRoutes');
const authRouter = require('./routes/authRoutes');

// create an express app
const app = express();

// add middleware to parse JSON
app.use(express.json());

// define the root route
app.use('/api/v1/jobs', jobsRouter);
app.use('/api/v1/auth', authRouter);

// export the app
module.exports = app;