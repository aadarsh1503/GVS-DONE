import React, { useState, useEffect } from 'react';

const AdminData = () => {
  const [adminData, setAdminData] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://gsv-12-4.onrender.com/api/admin');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setAdminData(data); // Assuming data is an array of admin objects
      } catch (error) {
        setError('Failed to fetch admin data');
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    if (!id) {
      console.error('No ID provided for deletion');
      return; // Exit if id is not available
    }

    try {
      const response = await fetch(`https://gsv-12-4.onrender.com/api/admin/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete admin data');
      }

      // Update the state to remove the deleted admin from the list
      setAdminData((prevAdminData) => prevAdminData.filter(admin => admin._id !== id));
    } catch (error) {
      setError('Failed to delete admin data');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white  rounded-lg shadow-lg w-full max-w-4xl lg:max-w-6xl">
        <h2 className="text-xl lg:text-2xl font-bold mb-4 text-center">Admin Data</h2>

        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
        {!error && adminData.length === 0 && <p className="text-center">No admin data found.</p>}

        {/* Large Screen Table View */}
        <div className="hidden lg:block">
          <div className="overflow-x-auto">
            <table className="table-auto w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="px-4 py-2 border">#</th>
                  <th className="px-4 py-2 border">ID</th>
                  <th className="px-4 py-2 border">Username</th>
                  <th className="px-4 py-2 border">Password</th>
                  <th className="px-4 py-2 border">Action</th>
                </tr>
              </thead>
              <tbody>
                {adminData.map((admin, index) => (
                  <tr key={admin._id || index} className="hover:bg-gray-100">
                    <td className="px-4 py-2 border">{index + 1}</td>
                    <td className="px-4 py-2 border">{admin._id}</td>
                    <td className="px-4 py-2 border">{admin.username}</td>
                    <td className="px-4 py-2 border">{admin.password}</td>
                    <td className="px-4 py-2 border">
                      <button
                        className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                        onClick={() => handleDelete(admin._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Screen Card View */}
        <div className="lg:hidden mt-32  grid-cols-1">
          {adminData.map((admin, index) => (
            <div key={admin._id} className="bg-white p-4 rounded-lg shadow-lg mx-auto  max-w-xs w-full">
              <p className="text-sm font-semibold mb-2">Admin #{index + 1}</p>
              <p className="text-sm mb-2"><strong>ID:</strong> {admin._id}</p>
              <p className="text-sm mb-2"><strong>Username:</strong> {admin.username}</p>
              <p className="text-sm mb-2"><strong>Password:</strong> {admin.password}</p>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded text-sm hover:bg-red-600 mt-2 w-full"
                onClick={() => handleDelete(admin._id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminData;
