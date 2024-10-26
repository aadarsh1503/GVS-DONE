import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home2 = () => {
  const navigate = useNavigate(); // Hook to navigate programmatically

  const handleLogout = () => {
    // Remove the token and user ID from local storage
    localStorage.removeItem('token');
    localStorage.removeItem('userId');

    // Use a timeout to ensure the state is cleared before navigating
    setTimeout(() => {
      navigate('/admin'); // Navigate to admin login page
    }, 100); // 100 milliseconds delay
  };

  // Use useEffect to handle any additional logout logic if needed
  useEffect(() => {
    // If you need to perform some actions on mount or update, you can add them here
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white relative">
      {/* Welcome Admin Text */}
      <h1 className="font-poppins text-4xl md:font-bebas md:text-6xl lg:text-10xl text-black mb-4 md:mb-2">
        Welcome <span className="md:outline-text">Admin</span>
      </h1>

      {/* Logout Button - Adjusted for Mobile View */}
      <button
        onClick={handleLogout}
        className="mt-4 text-white bg-red-500 hover:bg-red-800 px-4 py-2 rounded z-10 border border-white md:px-6 md:py-3"
      >
        Logout
      </button>
    </div>
  );
};

export default Home2;
