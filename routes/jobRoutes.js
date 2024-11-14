// import express
const express = require('express');
const jobController = require('../controllers/jobController');

// create an express router
const jobsRouter = express.Router();

jobsRouter.get('/', jobController.getAllJobs);
jobsRouter.get('/:id', jobController.getJobByID);
jobsRouter.post('/', jobController.createJob);
jobsRouter.put('/:id', jobController.updateJob);
jobsRouter.delete('/:id', jobController.deleteJob);

// export the router
module.exports = jobsRouter;