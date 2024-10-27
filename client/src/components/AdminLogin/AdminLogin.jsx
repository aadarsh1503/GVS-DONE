import React, { useState, useContext } from "react";
import { AiOutlineUser, AiOutlineLock, AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import AuthContext from '../AuthContext/AuthContext';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for programmatic navigation

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const { login } = useContext(AuthContext); // Use login function from AuthContext
  const navigate = useNavigate(); // useNavigate for navigation


  const togglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('https://gsv-12-4.onrender.com/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });
  
      if (!response.ok) {
        throw new Error('Invalid credentials');
      }
  
      const data = await response.json();
      const { token, userId } = data;
  
      // Store the token and userId using the AuthContext login function
      login(token, userId);
  
      // Redirect to dashboard using navigate
      navigate("/dashboard/homeAdmin"); // Programmatic navigation to dashboard
    } catch (error) {
      setError('Invalid credentials. Please try again.');
    }
  };
  

  return (
    <div className="flex items-center justify-center min-h-screen" style={{ background: 'linear-gradient(to right, #290a9a, #ffffff)' }}>
      <div className="bg-white shadow-lg rounded-lg p-8 w-96">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Admin Login</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4 relative">
            <AiOutlineUser className="absolute left-3 top-4 text-gray-400" size={20} />
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
              autoComplete="off"
              value={credentials.username}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6 relative">
            <AiOutlineLock className="absolute left-3 top-4 text-gray-400" size={20} />
            <input
              type={passwordVisible ? "text" : "password"}
              name="password"
              placeholder="Password"
              className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
              value={credentials.password}
              onChange={handleChange}
            />
            <button
              type="button"
              onClick={togglePassword}
              className="absolute right-3 top-3 text-gray-400"
            >
              {passwordVisible ? (
                <AiOutlineEyeInvisible size={20} />
              ) : (
                <AiOutlineEye size={20} />
              )}
            </button>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold py-2 rounded-lg transition duration-300 hover:opacity-80"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
