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
        try {
            // Get the job ID from the request parameters
            const { id } = request.params;

            // Find the document for the matching ID
            const job = await Job.findById(id);

            // If no document is found, return a 404 Not Found status code
            if (!job) {
                return response.status(404).json({ message: 'Job not found' });
            }

            // If a document is found, return a 200 OK status code and the document
            response.status(200).json(job);
        } catch (error) {
            response.status(500).json({ message: error.message });
        }
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
        try {
            // get the job ID from the request parameters
            const { id } = request.params;

            // extract the job details from the request body
            const { title } = request.body;

            // find the document for the matching ID
            const job = await Job.findById(id);

            // replace the job title with the new title
            job.title = title;

            // save the updated document to the database
            await job.save();

            // send a 200 OK status code and the updated document
            response.status(200).json({ message: 'Job updated successfully' });
        } catch (error) {
            response.status(500).json({ message: error.message });
        }
    },
    deleteJob: async (request, response) => {
        try {
            // get the job ID from the request parameters
            const { id } = request.params;

            // find the document for the matching ID and delete it
            const job = await Job.findByIdAndDelete(id);

            // if no document is found, return a 404 Not Found status code
            if (!job) {
                return response.status(404).json({ message: 'Job not found' });
            }

            // send a 200 OK status code
            response.status(200).json({ message: 'Job deleted successfully' });
        } catch (error) {
            response.status(500).json({ message: error.message });
        }
    }
}

module.exports = jobController;