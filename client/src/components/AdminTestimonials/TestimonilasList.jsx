import React, { useState, useEffect } from 'react';

const TestimonialsList = () => {
  const [testimonials, setTestimonials] = useState([]); // State for testimonials
  const [editingTestimonial, setEditingTestimonial] = useState(null); // Track the testimonial being edited
  const [modalOpen, setModalOpen] = useState(false); // State to manage modal visibility
  const [selectedImage, setSelectedImage] = useState(null); // For image preview

  // Fetch the testimonials data from the API
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch("https://gsv-12-4.onrender.com/api/testimonials"); // GET request
        if (!response.ok) throw new Error('Failed to fetch testimonials');
        const data = await response.json();
        setTestimonials(data); // Set the fetched testimonials to state
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }
    };

    fetchTestimonials(); // Call the fetch function when component mounts
  }, []);

  // Handle PATCH request to update the testimonial
  const handleUpdateTestimonial = (testimonialId, updatedData) => {
    fetch(`https://gsv-12-4.onrender.com/api/testimonials/${testimonialId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Testimonial updated successfully:', data);
        setTestimonials(testimonials.map(t => (t._id === testimonialId ? data : t))); // Update state with new data
      })
      .catch((error) => {
        console.error('Error updating testimonial:', error);
      });
  };

  // Handle DELETE request to delete the testimonial
  const handleDelete = (testimonialId) => {
    fetch(`https://gsv-12-4.onrender.com/api/testimonials/${testimonialId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (!response.ok) throw new Error('Failed to delete testimonial');
        setTestimonials(testimonials.filter(testimonial => testimonial._id !== testimonialId)); // Remove from state
        console.log('Testimonial deleted successfully');
      })
      .catch((error) => {
        console.error('Error deleting testimonial:', error);
      });
  };

  // Handle file change for image upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result); // Store image preview
        setEditingTestimonial(prev => ({
          ...prev,
          imgSrc: reader.result // Update imgSrc with the new image
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Enable edit mode for the selected testimonial
  const handleEditClick = (testimonial) => {
    setEditingTestimonial(testimonial); // Set the testimonial being edited
    setModalOpen(true); // Open the modal
    setSelectedImage(null); // Reset the image preview
  };

  // Handle form input changes for the editable fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditingTestimonial({ ...editingTestimonial, [name]: value });
  };

  // Submit updated data
  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdateTestimonial(editingTestimonial._id, {
      ...editingTestimonial,
      imgSrc: selectedImage || editingTestimonial.imgSrc, // Use the new image if provided
    });
    setModalOpen(false); // Close modal after submission
  };

  return (
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {testimonials.map((testimonial) => (
        <div 
          key={testimonial._id}  // Use _id as key if that's the ID field from backend
          className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          {/* Image section */}
          <div className="w-full h-48 bg-gray-200 rounded-lg overflow-hidden mb-4">
            <img 
              src={testimonial.imgSrc || 'https://via.placeholder.com/150'} 
              alt={testimonial.title} 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text section */}
          <div className="mb-4">
            <h3 className="text-xl font-bold text-purple-600">{testimonial.title}</h3>
            <p className="text-gray-700 mt-2 italic">"{testimonial.quote}"</p>
            <p className="text-sm text-gray-500 mt-2">- {testimonial.author}</p>
          </div>

          {/* Buttons section */}
          <div className="flex justify-between space-x-4">
            <button 
              onClick={() => handleEditClick(testimonial)} // Enter edit mode
              className="py-2 px-4 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors duration-300"
            >
              Edit
            </button>
            <button 
              onClick={() => handleDelete(testimonial._id)} // Delete testimonial
              className="py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600 transition-colors duration-300"
            >
              Delete
            </button>
          </div>
        </div>
      ))}

      {/* Modal for editing testimonial */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-11/12 md:w-1/2">
            <h2 className="text-xl font-bold mb-4">Edit Testimonial</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block mb-2">Title</label>
                <input
                  type="text"
                  name="title"
                  value={editingTestimonial.title}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Title"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Quote</label>
                <textarea
                  name="quote"
                  value={editingTestimonial.quote}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Quote"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Author</label>
                <input
                  type="text"
                  name="author"
                  value={editingTestimonial.author}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Author"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Image</label>
                <input 
                  type="file" 
                  onChange={handleFileChange} 
                  className="w-full"
                />
                {selectedImage && (
                  <img src={selectedImage} alt="Preview" className="mt-2 w-full h-48 object-cover rounded" />
                )}
              </div>
              <div className="flex justify-end">
                <button 
                  type="submit" 
                  className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Save Changes
                </button>
                <button 
                  type="button" 
                  onClick={() => setModalOpen(false)} 
                  className="py-2 px-4 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 ml-2"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestimonialsList;
