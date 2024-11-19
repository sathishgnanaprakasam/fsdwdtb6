const express = require('express');
const companyController = require('../controllers/companyController');

const companyRouter = express.Router();

// Define the routes
companyRouter.get('/', companyController.getAllCompanies);
companyRouter.get('/:id', companyController.getCompanyById);
companyRouter.post('/', companyController.createCompany);
companyRouter.put('/:id', companyController.updateCompany);
companyRouter.delete('/:id', companyController.deleteCompany);

module.exports = companyRouter;