// import express
const express = require('express');
const jobsRouter = require('./routes/jobRoutes');
const authRouter = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');
const companyRouter = require('./routes/companyRoutes');
const morgan = require('morgan');
const logger = require('./utils/logger');

// create an express app
const app = express();

// add middleware to parse JSON
app.use(express.json());

// add middleware to parse cookies
app.use(cookieParser());

// add middleware to log requests
// app.use(morgan('dev'));
app.use(logger);

// define the root route
app.use('/api/v1/jobs', jobsRouter);
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/companies', companyRouter);

// export the app
module.exports = app;