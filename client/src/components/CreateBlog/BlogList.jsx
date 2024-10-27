import React, { useEffect, useState } from 'react';

// EditBlogForm Component
const EditBlogForm = ({ blog, onUpdate, onCancel }) => {
  const [updatedTitle, setUpdatedTitle] = useState(blog.title);
  const [updatedDescription, setUpdatedDescription] = useState(blog.description);
  const [updatedImage, setUpdatedImage] = useState(blog.image || ''); 
  const [imagePreview, setImagePreview] = useState(blog.image || ''); 
  const [updatedAuthor, setUpdatedAuthor] = useState(blog.author || ''); 

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result); 
        setUpdatedImage(reader.result); 
      };
      reader.readAsDataURL(file);
    }
  };

  const updateBlog = async () => {
    try {
      const response = await fetch(`https://gsv-12-4.onrender.com/api/blogs/${blog._id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: updatedTitle,
          description: updatedDescription,
          image: updatedImage,
          author: updatedAuthor,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to update blog');
      }

      const updatedData = await response.json();
      onUpdate(updatedData); 
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="mt-4 p-4 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-lg font-bold">Edit Blog</h2>
      <input
        type="text"
        value={updatedTitle}
        onChange={(e) => setUpdatedTitle(e.target.value)}
        placeholder="Title"
        className="border p-2 rounded w-full mb-2"
      />
      <textarea
        value={updatedDescription}
        onChange={(e) => setUpdatedDescription(e.target.value)}
        placeholder="Description"
        className="border p-2 rounded w-full mb-2"
      />
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="border p-2 rounded w-full mb-2"
      />
      {imagePreview && (
        <img
          src={imagePreview}
          alt="Image Preview"
          className="mt-2 h-24 w-24 object-cover rounded-md"
        />
      )}
      <input
        type="text"
        value={updatedAuthor}
        onChange={(e) => setUpdatedAuthor(e.target.value)}
        placeholder="Author Name"
        className="border p-2 rounded w-full mb-2"
      />
      <button
        className="bg-green-500 text-white py-1 px-2 rounded hover:bg-green-600 transition"
        onClick={updateBlog}
      >
        Save Changes
      </button>
      <button
        className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600 transition ml-2"
        onClick={onCancel}
      >
        Cancel
      </button>
    </div>
  );
};

// Modal Component
const Modal = ({ children, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500">
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

// Alert Dialog Component
const AlertDialog = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-lg font-semibold mb-2">{message}</h2>
        <button className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600" onClick={onClose}>
          OK
        </button>
      </div>
    </div>
  );
};

// BlogList Component
const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [editBlog, setEditBlog] = useState(null); 
  const [isEditModalOpen, setIsEditModalOpen] = useState(false); 
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const fetchBlogs = async () => {
    try {
      const response = await fetch('https://gsv-12-4.onrender.com/api/blogs');
      if (!response.ok) {
        throw new Error('Failed to fetch blogs');
      }
      const data = await response.json();
      setBlogs(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleEdit = (blog) => {
    setEditBlog(blog);
    setIsEditModalOpen(true);
  };

  const handleUpdate = (updatedBlog) => {
    setBlogs((prevBlogs) =>
      prevBlogs.map((blog) => (blog._id === updatedBlog._id ? updatedBlog : blog))
    );
    setIsEditModalOpen(false);
    setEditBlog(null);
  };

  const handleCancelEdit = () => {
    setIsEditModalOpen(false);
    setEditBlog(null);
  };

  // Handle deleting a blog
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`https://gsv-12-4.onrender.com/api/blogs/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete blog');
      }

      setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog._id !== id));
      setAlertMessage('Blog deleted successfully!'); 
      setIsAlertOpen(true); 
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Blog List</h2>
      <div className="grid lg:grid-cols-3 gap-4 mt-4">
        {blogs.map((blog) => (
          <div key={blog._id} className="bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
            {blog.image && (
              <img
                src={blog.image}
                alt="Blog"
                className="h-48 w-full object-cover rounded-md mb-2"
              />
            )}
            <h3 className="text-lg font-semibold">{blog.title}</h3>
            <p className="mt-2 text-gray-700">{blog.description}</p>
            <p className="mt-1 text-gray-500">By {blog.author}</p>
            <div className="mt-2 flex justify-between">
              <button
                className="bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600 transition"
                onClick={() => handleEdit(blog)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600 transition"
                onClick={() => handleDelete(blog._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {isEditModalOpen && (
        <Modal onClose={handleCancelEdit}>
          <EditBlogForm
            blog={editBlog}
            onUpdate={handleUpdate}
            onCancel={handleCancelEdit}
          />
        </Modal>
      )}

      {isAlertOpen && (
        <AlertDialog message={alertMessage} onClose={() => setIsAlertOpen(false)} />
      )}
    </div>
  );
};

export default BlogList;
