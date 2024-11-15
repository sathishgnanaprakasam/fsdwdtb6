const User = require('../models/user');

const authController = {
    register: async (request, response) => {
        try {
            // extract the details name, email, password from the request body
            const { name, email, password } = request.body;

            // check if the user already exists
            const userExists = await User.findOne({ email: email });

            // if the user exists, return an error message
            if (userExists) {
                return response.status(400).json({ message: 'User already exists' });
            }

            // create a new user object
            const newUser = new User({
                name,
                email,
                password
            });

            // save the user object to the database
            await newUser.save();

            // return a success message
            return response.status(201).json({ message: 'User created successfully' });
        } catch (error) {
            return response.status(500).json({ error: error.message });
        }
    },
    login: async (request, response) => {

    },
    logout: async (request, response) => {

    }
}

module.exports = authController;