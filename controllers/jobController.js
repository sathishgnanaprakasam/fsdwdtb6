// import Job model
const Job = require('../models/job');

const jobController = {
    getAllJobs: async (request, response) => {
        try {
            const jobs = await Job.find();
            response.status(200).json(jobs);
        } catch (error) {
            response.status(500).json({ message: error.message });
        }
    },
    getJobByID: async (request, response) => {

    },
    createJob: async (request, response) => {
        try {
            // extract the job details from the request body
            const { title, description, location, salary, experience, skills } = request.body;

            // create a new job object with the extracted details
            const newJob = new Job({
                title,
                description,
                location,
                salary,
                experience,
                skills
            });

            // save the new job object to the database
            await newJob.save();

            // send a 201 Created status code and the new job object
            response.status(201).json({ message: 'Job created successfully' });
        } catch (error) {
            response.status(500).json({ message: error.message });
        }
    },
    updateJob: async (request, response) => {

    },
    deleteJob: async (request, response) => {

    }
}

module.exports = jobController;