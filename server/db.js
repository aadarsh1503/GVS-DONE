import mongoose from 'mongoose';
import dotenv from 'dotenv'; // Import dotenv to load environment variables

dotenv.config(); // Load environment variables from .env file

const mongoURI = process.env.MONGODB_URI; // This should get the MongoDB URI

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log('MongoDB connected');
    } catch (err) {
        console.error(err);
        process.exit(1); // Exit the process with failure
    }
};

export default connectDB; // Export the connectDB function
