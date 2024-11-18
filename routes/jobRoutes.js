// import express
const express = require('express');
const jobController = require('../controllers/jobController');
const auth = require('../utils/auth');

// create an express router
const jobsRouter = express.Router();

// public endpoints
jobsRouter.get('/', jobController.getAllJobs);
jobsRouter.get('/:id', jobController.getJobByID);

// protected endpoints - Roles: Admin, Manager
jobsRouter.post('/', auth.isAuthenticated, auth.allowRoles(['admin', 'manager']), jobController.createJob);
jobsRouter.put('/:id', auth.isAuthenticated, auth.allowRoles(['admin', 'manager']), jobController.updateJob);
jobsRouter.delete('/:id', auth.isAuthenticated, auth.allowRoles(['admin']), jobController.deleteJob);

// export the router
module.exports = jobsRouter;