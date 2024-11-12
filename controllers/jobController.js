const jobController = {
    getJobs: (request, response) => {
        response.send('Get request received');
    },
    createJob: (request, response) => {
        response.send('Post request received');
    }
}

module.exports = jobController;