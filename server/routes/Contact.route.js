import express from 'express';
import ContactForm from '../models/Contact.schema.js'; // Adjust the path as necessary

const ContactRouter = express.Router();

// POST: Create a new contact form entry
ContactRouter.post('/', async (req, res) => {
    const { name, phoneNumber, email, message } = req.body;

    try {
        const newContact = new ContactForm({ name, phoneNumber, email, message });
        await newContact.save();
        res.status(201).json({ message: 'Contact form submitted successfully!', contact: newContact });
    } catch (error) {
        res.status(400).json({ error: 'Error submitting contact form', details: error.message });
    }
});

// GET: Retrieve all contact form entries
ContactRouter.get('/', async (req, res) => {
    try {
        const contacts = await ContactForm.find();
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching contact forms', details: error.message });
    }
});

// GET: Retrieve a specific contact form entry by ID
ContactRouter.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const contact = await ContactForm.findById(id);
        if (!contact) {
            return res.status(404).json({ error: 'Contact form not found' });
        }
        res.status(200).json(contact);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching contact form', details: error.message });
    }
});

// PUT: Update a contact form entry by ID
ContactRouter.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name, phoneNumber, email, message } = req.body;

    try {
        const updatedContact = await ContactForm.findByIdAndUpdate(
            id,
            { name, phoneNumber, email, message },
            { new: true, runValidators: true } // Return the updated document and run validators
        );
        if (!updatedContact) {
            return res.status(404).json({ error: 'Contact form not found' });
        }
        res.status(200).json({ message: 'Contact form updated successfully!', contact: updatedContact });
    } catch (error) {
        res.status(400).json({ error: 'Error updating contact form', details: error.message });
    }
});

// DELETE: Remove a contact form entry by ID
ContactRouter.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const deletedContact = await ContactForm.findByIdAndDelete(id);
        if (!deletedContact) {
            return res.status(404).json({ error: 'Contact form not found' });
        }
        res.status(200).json({ message: 'Contact form deleted successfully!' });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting contact form', details: error.message });
    }
});

export default ContactRouter;
