const app = require('./app');

// listen for requests
app.listen(3001, () => {
    console.log('Server is running on port http://localhost:3001');
});