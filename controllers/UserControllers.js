// UserController.js
const { User } = require('../models');
const bcrypt = require('bcrypt');

class UserController {
    async createUser(req, res) {
        try {
            // Extract user information from the request body
            const { full_name, birthday, email, password, picture, isAdmin } = req.body;
            const hashedPassword = await bcrypt.hash(password, 10);
            // Create a new user with hashed password and other information
            const newUser = await User.create({
                full_name,
                birthday,
                email,
                password: hashedPassword,
                picture,
                isAdmin: isAdmin || false 
            });

            return res.status(201).json(newUser);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Server error' });
        }
    }
}

module.exports = new UserController();
