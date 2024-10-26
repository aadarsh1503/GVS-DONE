import mongoose from 'mongoose';

// Define the blog schema
const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  author: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    required: true,
  },
});

// Create and export the Blog model
const Blog = mongoose.model('Blog', blogSchema);
export default Blog;
