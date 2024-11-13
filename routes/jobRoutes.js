// import express
const express = require('express');
const jobController = require('../controllers/jobController');

// create an express router
const jobsRouter = express.Router();

jobsRouter.get('/', jobController.test);

// export the router
module.exports = jobsRouter;