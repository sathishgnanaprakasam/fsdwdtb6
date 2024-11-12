const fs = require('fs');

// Load the database
function loadDatabase() {
    const data = fs.readFileSync('./db.json');
    return JSON.parse(data);
}

// Save the database
function saveDatabase(data) {
    fs.writeFileSync('./db.json', JSON.stringify(data));
}

const jobController = {
    getJobs: (request, response) => {
        const data = loadDatabase();
        response.json(data.jobs);
    },
    getJob: (request, response) => {
        const data = loadDatabase();
        const id = request.params.id;

        const job = data.jobs.filter(job => job.id === id);

        if (job.length === 0) {
            response.status(404).json({ message: 'Job not found' });
            return;
        }

        response.json(job);
    },
    createJob: (request, response) => {
        // Get the data from db.json
        const data = loadDatabase();

        // get the data from request.body
        const { title, location, company, description, isFavorite } = request.body;

        // create a new job object
        const job = {
            id: parseInt(data.jobs[data.jobs.length - 1].id) + 1,
            title,
            location,
            company,
            description,
            isFavorite
        }

        // append the new job object to the data.jobs array
        data.jobs.push(job);

        // save the data to db.json
        saveDatabase(data);

        // return the new job object as a response
        response.json(job);
    },
    updateJob: (request, response) => {
        // Get the data from db.json
        const data = loadDatabase();

        // get the data from request.body
        const { title, location, company, description, isFavorite } = request.body;

        // get the job id from request.params
        const id = request.params.id;

        // find the index of the job object in the data.jobs array
        const index = data.jobs.findIndex(job => job.id === id);

        // update the job object in the data.jobs array with the new data from request.body
        data.jobs[index] = {
            ...data.jobs[index],
            title,
            location,
            company,
            description,
            isFavorite
        }

        // save the data to db.json
        saveDatabase(data);

        // return the updated job object as a response
        response.json(data.jobs[index]);
    },
    deleteJob: (request, response) => {
        // Get the data from db.json
        const data = loadDatabase();

        // Get the id from request.params
        const id = request.params.id;

        // Find the index of the job object in the data.jobs array
        const index = data.jobs.findIndex(job => job.id === id);

        // Remove the job object from the data.jobs array
        data.jobs.splice(index, 1);

        // Save the data to db.json
        saveDatabase(data);

        // Return a response with the deleted job object
        response.json({ message: 'Job deleted' });
    }
}

module.exports = jobController;