import express from "express";
import Testimonial from "../models/Testimonials.schema.js";

const TestimonialsRouter = express.Router();

// GET all testimonials
TestimonialsRouter.get("/", async (req, res) => {
  try {
    const testimonials = await Testimonial.find();
    res.status(200).json(testimonials);
  } catch (error) {
    res.status(500).json({ message: "Error fetching testimonials", error });
  }
});

// GET a single testimonial by ID
TestimonialsRouter.get("/:id", async (req, res) => {
  try {
    const testimonial = await Testimonial.findById(req.params.id);
    if (!testimonial) {
      return res.status(404).json({ message: "Testimonial not found" });
    }
    res.status(200).json(testimonial);
  } catch (error) {
    res.status(500).json({ message: "Error fetching testimonial", error });
  }
});

// POST a new testimonial
TestimonialsRouter.post("/", async (req, res) => {
  const { imgSrc, title, quote, author } = req.body;
  try {
    const newTestimonial = new Testimonial({
      imgSrc,
      title,
      quote,
      author,
    });
    const savedTestimonial = await newTestimonial.save();
    res.status(201).json(savedTestimonial);
  } catch (error) {
    res.status(500).json({ message: "Error saving testimonial", error });
  }
});

// PUT (full update) a testimonial by ID
TestimonialsRouter.put("/:id", async (req, res) => {
  const { imgSrc, title, quote, author } = req.body;
  try {
    const updatedTestimonial = await Testimonial.findByIdAndUpdate(
      req.params.id,
      { imgSrc, title, quote, author },
      { new: true, runValidators: true }
    );
    if (!updatedTestimonial) {
      return res.status(404).json({ message: "Testimonial not found" });
    }
    res.status(200).json(updatedTestimonial);
  } catch (error) {
    res.status(500).json({ message: "Error updating testimonial", error });
  }
});

// PATCH (partial update) a testimonial by ID
TestimonialsRouter.patch("/:id", async (req, res) => {
  try {
    const updatedTestimonial = await Testimonial.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedTestimonial) {
      return res.status(404).json({ message: "Testimonial not found" });
    }
    res.status(200).json(updatedTestimonial);
  } catch (error) {
    res.status(500).json({ message: "Error updating testimonial", error });
  }
});

// DELETE a testimonial by ID
TestimonialsRouter.delete("/:id", async (req, res) => {
  try {
    const deletedTestimonial = await Testimonial.findByIdAndDelete(req.params.id);
    if (!deletedTestimonial) {
      return res.status(404).json({ message: "Testimonial not found" });
    }
    res.status(200).json({ message: "Testimonial deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting testimonial", error });
  }
});

export default TestimonialsRouter;
