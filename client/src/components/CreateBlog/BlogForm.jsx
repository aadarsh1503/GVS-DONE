import React, { useState, useRef } from 'react';

const BlogForm = ({ initialData, isEditing }) => {
  const [formData, setFormData] = useState(initialData || {
    title: '',
    description: '',
    author: '',
    image: '',
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [successMessageVisible, setSuccessMessageVisible] = useState(false); // State for success message
  const fileInputRef = useRef(null); // Create a ref for the file input

  // Handle form changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setFormData({ ...formData, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiEndpoint = isEditing
      ? `http://localhost:5000/api/blogs/${initialData.id}`
      : 'http://localhost:5000/api/blogs';

    const method = isEditing ? 'PATCH' : 'POST'; // Use PATCH for editing

    try {
      const response = await fetch(apiEndpoint, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Blog submitted successfully:', data);
        
        // Reset form data and image preview
        setFormData({ title: '', description: '', author: '', image: '' });
        setImagePreview(null);
        fileInputRef.current.value = ''; // Reset file input

        // Show success message
        setSuccessMessageVisible(true);
        setTimeout(() => {
          setSuccessMessageVisible(false);
        }, 3000); // Hide message after 3 seconds
      } else {
        alert('Failed to submit blog');
      }
    } catch (error) {
      console.error('Error submitting blog:', error);
    }
  };

  return (
    <div className="space-y-4 max-w-xl mx-auto">
      <h3 className="text-xl font-semibold text-center">{isEditing ? 'Edit Blog' : 'Create Blog'}</h3>
      
      {/* Added mt-32 for top margin */}
      <form onSubmit={handleSubmit} className="mt-32">
        <div className="space-y-1">
          <label htmlFor="title" className="block text-lg font-medium text-gray-700">Blog Title</label>
          <input
            id="title"
            name="title"
            type="text"
            value={formData.title}
            onChange={handleChange}
            required
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900"
            placeholder="Enter the blog title"
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="description" className="block text-lg font-medium text-gray-700">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900"
            rows="4"
            placeholder="Enter blog description"
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="author" className="block text-lg font-medium text-gray-700">Author</label>
          <input
            id="author"
            name="author"
            type="text"
            value={formData.author}
            onChange={handleChange}
            required
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900"
            placeholder="Enter author name"
          />
        </div>

        <div className="space-y-3">
          <label htmlFor="image" className="block text-lg font-medium text-gray-700">Upload Image</label>
          <input
            id="image"
            name="image"
            type="file"
            onChange={handleImageUpload}
            accept="image/*"
            className="block w-full text-gray-900 border border-gray-300 rounded-md"
            ref={fileInputRef} // Attach ref to file input
          />
        </div>

        {imagePreview && (
          <div className="mt-2">
            <p className="text-sm text-gray-600">Image Preview:</p>
            <img src={imagePreview} alt="Selected" className="mt-2 h-24 w-24 object-fill rounded-md shadow-md" />
          </div>
        )}

        <button
          type="submit"
          className="w-full flex justify-center mt-6 py-2 px-4 border border-transparent text-lg font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700"
        >
          {isEditing ? 'Update Blog' : 'Create Blog'}
        </button>
      </form>

      {/* Success Message */}
      {successMessageVisible && (
        <div className="flex items-center justify-center mt-4 p-2 bg-green-100 border border-green-400 text-green-700 rounded-md shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span>Blog submitted successfully!</span>
        </div>
      )}
    </div>
  );
};

export default BlogForm;
