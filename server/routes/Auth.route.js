import express from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User.schema.js'; // Adjust the path as necessary
const AdminRouter = express.Router();

// Secret key for JWT (should be in an environment variable)
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

// Register route - Add user without bcrypt (storing plain password)
AdminRouter.post('/register', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Check if user already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists.' });
        }

        // Create a new user with the plain password
        const newUser = new User({ username, password }); // Directly storing plain password (temporary)
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error.' });
    }
});

// Login route - Check password and generate JWT
AdminRouter.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Find the user in the database
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials.' });
        }

        // Compare the entered password with the one in the database (plain comparison for now)
        if (user.password !== password) {
            return res.status(400).json({ message: 'Invalid credentials.' });
        }

        // Create JWT token with user ID
        const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });

        // Send token and user details as response
        res.status(200).json({ token, userId: user._id });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error.' });
    }
});

export default AdminRouter;
