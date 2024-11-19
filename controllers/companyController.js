const Company = require('../models/company');

const companyController = {
    getAllCompanies: async (request, response) => {
        try {
            const companies = await Company.find();
            return response.status(200).json(companies);
        } catch (error) {
            return response.status(500).json({ message: error.message });
        }
    },
    getCompanyById: async (request, response) => {

    },
    createCompany: async (request, response) => {
        try {
            const { name, location, email, phone, website } = request.body;

            // check if the company already exists
            const companyExists = await Company.find({ name: name.toLowerCase() });

            if (companyExists.length > 0) {
                return response.status(400).json({ message: 'Company already exists' });
            }

            const newCompany = new Company({
                name: name.toLowerCase(),
                location,
                email,
                phone,
                website
            });

            await newCompany.save();

            return response.status(201).json({ message: 'Company created successfully' });
        } catch (error) {
            return response.status(500).json({ message: error.message });
        }
    },
    updateCompany: async (request, response) => {

    },
    deleteCompany: async (request, response) => {

    }
}

module.exports = companyController;