import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home2 = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove authentication data from local storage
    localStorage.removeItem('token');
    localStorage.removeItem('userId');

    // Redirect to admin login page and clear navigation history
    navigate('/admin', { replace: true });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white relative">
      {/* Welcome Admin Text */}
      <h1 className="font-poppins text-4xl md:font-bebas md:text-6xl lg:text-10xl text-black mb-4 md:mb-2">
        Welcome <span className="md:outline-text">Admin</span>
      </h1>

      {/* Logout Button */}
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
