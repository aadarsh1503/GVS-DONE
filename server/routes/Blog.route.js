import express from 'express';
import Blog from '../models/Blog.schema.js'; // Use ES module import syntax

const BlogRouter = express.Router();

// Get all blogs
BlogRouter.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching blogs', error });
  }
});

// Get a blog by ID
BlogRouter.get('/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching blog', error });
  }
});

// Create a new blog
BlogRouter.post('/', async (req, res) => {
  const { title, description, author, image } = req.body; // Removed category and icon

  const newBlog = new Blog({
    title,
    description,
    author,
    image,
  });

  try {
    const savedBlog = await newBlog.save();
    res.status(201).json(savedBlog);
  } catch (error) {
    res.status(400).json({ message: 'Error creating blog', error });
  }
});

// Update a blog by ID
BlogRouter.put('/:id', async (req, res) => {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedBlog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.status(200).json(updatedBlog);
  } catch (error) {
    res.status(400).json({ message: 'Error updating blog', error });
  }
});

// Update a blog by ID (partial update)
BlogRouter.patch('/:id', async (req, res) => {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedBlog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.status(200).json(updatedBlog);
  } catch (error) {
    res.status(400).json({ message: 'Error updating blog', error });
  }
});

// Delete a blog by ID
BlogRouter.delete('/:id', async (req, res) => {
  try {
    const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
    if (!deletedBlog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.status(200).json({ message: 'Blog deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting blog', error });
  }
});

export default BlogRouter;
