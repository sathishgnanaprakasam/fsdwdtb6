const jobController = {
    test: (request, response) => {
        response.json({ message: 'Hello, World!' });
    }
}

module.exports = jobController;