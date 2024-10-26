import express from 'express';
import Admin from '../models/User.schema.js'; // Adjust the import path as needed
import jwt from 'jsonwebtoken'; // If you are using JWT for authentication

const UserRouter = express.Router();

// Create a new admin user
UserRouter.post('/admin/register', async (req, res) => {
    const { username, password } = req.body;

    try {
        const newAdmin = new Admin({
            username,
            password, // Store the password as is (plaintext)
        });

        await newAdmin.save();
        res.status(201).json({ message: 'Admin created successfully!' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get all admin users
UserRouter.get('/admin', async (req, res) => {
    try {
        const admins = await Admin.find();
        res.status(200).json(admins);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get a specific admin user by ID
UserRouter.get('/admin/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const admin = await Admin.findById(id);
        if (!admin) return res.status(404).json({ message: 'Admin not found' });
        res.status(200).json(admin);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update an existing admin user by ID
UserRouter.put('/admin/:id', async (req, res) => {
    const { id } = req.params;
    const { username, password } = req.body;

    try {
        const updatedAdmin = await Admin.findByIdAndUpdate(
            id,
            {
                username,
                password, // Update the password as is (plaintext)
            },
            { new: true }
        );

        if (!updatedAdmin) return res.status(404).json({ message: 'Admin not found' });
        res.status(200).json(updatedAdmin);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Patch an existing admin user (for partial updates)
UserRouter.patch('/admin/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const updatedAdmin = await Admin.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedAdmin) return res.status(404).json({ message: 'Admin not found' });
        res.status(200).json(updatedAdmin);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete an admin user by ID
UserRouter.delete('/admin/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const deletedAdmin = await Admin.findByIdAndDelete(id);
        if (!deletedAdmin) return res.status(404).json({ message: 'Admin not found' });
        res.status(200).json({ message: 'Admin deleted successfully!' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default UserRouter;
