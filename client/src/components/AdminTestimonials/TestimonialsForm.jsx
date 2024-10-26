import React, { useState, useEffect } from 'react';

const TestimonialForm = ({ isEditing, currentTestimonial, handleSubmit }) => {
  const [testimonial, setTestimonial] = useState({
    imgSrc: '',
    title: '',
    quote: '',
    author: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTestimonial({
      ...testimonial,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setTestimonial({
          ...testimonial,
          imgSrc: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(testimonial);
    resetForm(); // Reset the form after submission
  };

  // Function to reset the form fields
  const resetForm = () => {
    setTestimonial({ imgSrc: '', title: '', quote: '', author: '' });
  };

  // If editing, populate the form with the current testimonial data
  useEffect(() => {
    if (isEditing && currentTestimonial) {
      setTestimonial(currentTestimonial);
    } else {
      resetForm(); // Reset if not editing
    }
  }, [isEditing, currentTestimonial]);

  return (
    <form
      onSubmit={handleFormSubmit}
      className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm mx-auto" // Responsive width and centering
    >
      <h2 className="text-2xl font-bold mb-4 text-center">
        {isEditing ? 'Update Testimonial' : 'Create Testimonial'}
      </h2>
      <input
        type="file"
        name="imgSrc"
        accept="image/*"
        onChange={handleFileChange}
        className="block mb-4 p-2 border border-gray-300 rounded w-full"
        required
      />
      {testimonial.imgSrc && (
        <img src={testimonial.imgSrc} alt="Preview" className="mb-4 w-32 h-32 object-cover mx-auto" />
      )}
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={testimonial.title}
        onChange={handleChange}
        className="block mb-4 p-2 border border-gray-300 rounded w-full"
        required
      />
      <textarea
        name="quote"
        placeholder="Quote"
        value={testimonial.quote}
        onChange={handleChange}
        className="block mb-4 p-2 border border-gray-300 rounded w-full"
        required
      />
      <input
        type="text"
        name="author"
        placeholder="Author"
        value={testimonial.author}
        onChange={handleChange}
        className="block mb-4 p-2 border border-gray-300 rounded w-full"
        required
      />
      <button
        type="submit"
        className="p-4 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 w-full"
      >
        {isEditing ? 'Update Testimonial' : 'Create Testimonial'}
      </button>
    </form>
  );
};

export default TestimonialForm;
