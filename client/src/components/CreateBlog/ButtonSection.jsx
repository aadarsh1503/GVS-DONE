import React, { useState } from 'react';
import BlogForm from './BlogForm'; // Import your BlogForm component
import BlogList from './BlogList'; // Import your BlogList component

const ParentComponent = () => {
  const [isCreating, setIsCreating] = useState(false);

  const handleCreate = () => {
    setIsCreating(true);
  };

  const handleEdit = () => {
    setIsCreating(false);
  };

  return (
    <div className="container mx-auto p-4">
      <ButtonSection onCreate={handleCreate} onEdit={handleEdit} />
      {isCreating ? <BlogForm /> : <BlogList />}
    </div>
  );
};

const ButtonSection = ({ onCreate, onEdit }) => {
  return (
    <div>
      <h1 className='lg:font-bebas flex lg:text-8xl text-center mt-32 justify-center mb-4 lg:font-normal sm:font-bold sm:font-poppins text-4xl'>BLOGS</h1>
    <div className="flex justify-center max-w-xl  mx-auto space-x-4 mb-4">
      
      <button
        onClick={onCreate}
        className="flex-1 py-4 rounded-md bg-blue-600 text-white hover:bg-purple-700"
      >
        Create Blog
      </button>
      <button
        onClick={onEdit}
        className="flex-1 py-4 rounded-md bg-blue-600 text-white hover:bg-purple-700"
      >
        Edit Blogs
      </button>
    </div>
    </div>
  );
};

export default ParentComponent;
