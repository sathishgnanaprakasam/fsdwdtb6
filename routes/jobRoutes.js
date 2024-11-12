const express = require('express');
const jobController = require('../controllers/jobController');
const jobRouter = express.Router();

// define routes for the job resource
jobRouter.get('/', jobController.getJobs);
jobRouter.get('/:id', jobController.getJob);
jobRouter.post('/', jobController.createJob);
jobRouter.put('/:id', jobController.updateJob);
jobRouter.delete('/:id', jobController.deleteJob);

// export the router
module.exports = jobRouter;