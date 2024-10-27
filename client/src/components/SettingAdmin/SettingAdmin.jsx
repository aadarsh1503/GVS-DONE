import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../AuthContext/AuthContext';

const AdminSettings = () => {
  const { userId, authToken, userEmail } = useContext(AuthContext);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false); // For delete confirmation

  const navigate = useNavigate();

  // Toggle form visibility
  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
    setMessage('');
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userId || !authToken) {
      setMessage('User not authenticated. Please log in.');
      return;
    }

    try {
      const response = await fetch('https://gsv-12-4.onrender.com/api/admin/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`,
        },
        body: JSON.stringify({ username: email, password, userId }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage('success');
      } else {
        setMessage(data.message || 'Registration failed.');
      }
    } catch (error) {
      setMessage('An error occurred while registering the admin.');
    }

    setEmail('');
    setPassword('');
    setIsFormOpen(false);
  };

  // Handle account deletion with confirmation
  const handleDeleteAccount = async () => {
    if (!userId || !authToken) {
      setMessage('User not authenticated. Please log in.');
      return;
    }

    try {
      const response = await fetch(`https://gsv-12-4.onrender.com/api/admin/${userId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${authToken}`,
        },
      });

      if (response.ok) {
        setMessage('Your account has been deleted successfully.');
        setTimeout(() => {
          navigate('/admin');
        }, 2000);
      } else {
        const data = await response.json();
        setMessage(data.message || 'Failed to delete account.');
      }
    } catch (error) {
      setMessage('An error occurred while deleting the account.');
    }
  };

  // Show confirmation before deleting account
  const confirmDelete = () => {
    setShowDeleteConfirmation(true);
  };

  // Cancel delete action
  const cancelDelete = () => {
    setShowDeleteConfirmation(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen lg:-mt-32 bg-gray-100 px-4 sm:px-8">
      <h1 className="text-4xl sm:text-8xl lg:font-bebas lg:mt-64 mt-32 lg:mb-10 text-black sm:font-poppins">Settings</h1>

      {userEmail && (
        <p className="text-lg text-gray-700 mb-4">Logged in as: {userEmail}</p>
      )}

      {/* Buttons in the same row */}
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 mt-8 w-full sm:w-auto justify-center">
        <button
          onClick={toggleForm}
          className="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 px-8 sm:py-4 sm:px-16 text-xl sm:text-2xl rounded-lg font-semibold hover:opacity-80 transition duration-300"
        >
          Add Admin
        </button>

        <button
          onClick={confirmDelete}
          className="bg-red-600 text-white py-3 px-8 sm:py-4 sm:px-16 text-xl sm:text-2xl rounded-lg font-semibold hover:opacity-80 transition duration-300"
        >
          Delete Your Account
        </button>
      </div>

      {isFormOpen && (
        <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8 w-full sm:w-96 mt-8">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Register New Admin</h2>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 mb-2">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Enter admin email"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-600 mb-2">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Enter password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white font-bold py-4 text-xl rounded-lg transition duration-300 hover:opacity-80"
          >
            Register Admin
          </button>
        </form>
      )}

      {/* Delete confirmation modal */}
      {showDeleteConfirmation && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center px-4">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center w-full max-w-lg">
            <h2 className="text-xl font-semibold mb-4">Are you sure you want to delete your account?</h2>
            <div className="flex justify-center space-x-4">
              <button
                onClick={handleDeleteAccount}
                className="bg-red-600 text-white py-2 px-8 text-lg rounded-lg font-semibold hover:opacity-80 transition duration-300"
              >
                OK
              </button>
              <button
                onClick={cancelDelete}
                className="bg-gray-400 text-white py-2 px-8 text-lg rounded-lg font-semibold hover:opacity-80 transition duration-300"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success and error messages */}
      {message === 'success' && (
        <div className="mt-6 flex flex-col items-center bg-white border border-gray-300 p-4 rounded-lg shadow-lg w-full sm:w-96">
          <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-green-500 animate-ping"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.707a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <p className="text-green-700 text-lg font-semibold">Admin Created Successfully!</p>
        </div>
      )}

      {message && message !== 'success' && (
        <div className="mt-6 bg-red-100 text-red-700 p-4 rounded-lg shadow-lg w-full sm:w-96">
          {message}
        </div>
      )}
    </div>
  );
};

export default AdminSettings;
