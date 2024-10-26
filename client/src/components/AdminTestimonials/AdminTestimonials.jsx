import React, { useState } from 'react';
import TestimonialsList from './TestimonilasList';
import TestimonialForm from './TestimonialsForm';

const AdminTestimonials = () => {
  const [showForm, setShowForm] = useState(true); // To toggle between form and list
  const [testimonials, setTestimonials] = useState([]); // Placeholder for testimonial list
  const [successMessage, setSuccessMessage] = useState(''); // State for success message
  const [messageVisible, setMessageVisible] = useState(false); // State to control message visibility

  // Function to reset the form after submission
  const resetForm = () => {
    setShowForm(true); // Ensure the form remains displayed
    console.log('Form reset'); // Log the form reset
  };

  // Function to handle form submission (POST API)
  const handleFormSubmit = async (testimonial) => {
    console.log('Form submitted:', testimonial); // Log submitted testimonial
    try {
      const response = await fetch("http://localhost:5000/api/testimonials", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(testimonial),
      });
      if (response.ok) {
        const newTestimonial = await response.json();
        setTestimonials([...testimonials, newTestimonial]); // Update the list after successful creation
        setSuccessMessage('Testimonial created successfully!'); // Set success message
        setMessageVisible(true); // Show the message
        resetForm(); // Reset the form
        // Automatically hide message after 3 seconds
        setTimeout(() => {
          setMessageVisible(false);
        }, 3000);
      } else {
        setSuccessMessage('Failed to create testimonial'); // Handle error message
        setMessageVisible(true); // Show the error message
      }
    } catch (error) {
      console.error('Error creating testimonial:', error);
      setSuccessMessage('Error creating testimonial'); // Set error message
      setMessageVisible(true); // Show the error message
    }
  };

  // Function to handle message cancel
  const handleCancelMessage = () => {
    setMessageVisible(false);
  };

  // Toggle between form and list
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const ActionButtons = ({ toggleForm }) => (
    <div className="flex space-x-4 mb-6">
      <button
        onClick={toggleForm}
        className="p-4 bg-green-500 text-white rounded-lg shadow-lg hover:bg-gray-600"
      >
        {showForm ? 'Show Testimonials List' : 'Create Testimonial'}
      </button>
    </div>
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-3 bg-gray-100">
      {/* Responsive heading */}
      <h1 className="text-4xl sm:text-5xl lg:text-8xl lg:mt-32 font-bebas mb-6">
        Admin <span className="hidden lg:inline ">Testimonials</span>
        <span className="lg:hidden">Testimonials</span> {/* Only show "Testimonials" on mobile */}
      </h1>
      <ActionButtons toggleForm={toggleForm} />

      {/* Conditionally show either the form or the list based on toggle */}
      {showForm ? (
        <TestimonialForm handleSubmit={handleFormSubmit} />
      ) : (
        <TestimonialsList
          testimonials={testimonials} // Pass the testimonials to the list
          handleDelete={() => {}}
          handleEditClick={() => {}}
        />
      )}

      {/* Success message component */}
      {messageVisible && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
          <div className="bg-green-100 text-green-700 p-4 rounded-lg shadow-lg transition-transform animate-fade-in">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5 0a9 9 0 11-9-9 9 9 0 019 9z" />
              </svg>
              <span>{successMessage}</span>
              <button
                onClick={handleCancelMessage}
                className="ml-4 text-gray-500 hover:text-gray-700"
              >
                &times;
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminTestimonials;
