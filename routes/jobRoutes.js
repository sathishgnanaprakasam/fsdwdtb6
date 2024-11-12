const express = require('express');
const jobController = require('../controllers/jobController');
const jobRouter = express.Router();

// define routes for the job resource
jobRouter.get('/', jobController.getJobs);
jobRouter.post('/', jobController.createJob);

// export the router
module.exports = jobRouter;