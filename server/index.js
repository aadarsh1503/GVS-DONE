import express from 'express';
import cors from 'cors'; // Import the CORS package
import connectDB from './db.js';
import ContactRouter from './routes/Contact.route.js';
import AdminRouter from './routes/Auth.route.js';
import UserRouter from './routes/User.route.js';
import TestimonialsRouter from './routes/Testimonials.route.js';
import BlogRouter from './routes/Blog.route.js';

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

// Middleware to enable CORS
app.use(cors()); // Add this line to enable CORS

// Middleware to parse JSON bodies with limit
app.use(express.json({ limit: '10mb' })); // Adjust limit as needed
app.use(express.urlencoded({ limit: '10mb', extended: true })); 

// Health check route
app.get('/', (req, res) => {
    res.send('Backend is running smoothly!');
});

app.use('/api/contact', ContactRouter);
app.use('/api/admin', AdminRouter);
app.use('/api/', UserRouter);
app.use('/api/Testimonials', TestimonialsRouter);
app.use('/api/Blogs', BlogRouter);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
});
