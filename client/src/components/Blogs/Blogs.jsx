import React, { useState, useEffect } from 'react';

const Blog = () => {
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from API
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/Blogs');
        const data = await response.json();
        setBlogs(data); // assuming the data is in array format
        setLoading(false);
      } catch (error) {
        console.error('Error fetching blogs:', error);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Category data
  const categoryData = [
    {
      heading: 'Overcoming Common Challenges in Real Estate App Development',
      description: 'Explore all our blogs covering various topics related to app development.',
      image: 'https://www.solutionanalysts.com/blog/wp-content/uploads/2021/02/Real-Estate-App-Development.png',
      author: 'Team Blog',
      date: 'September 20, 2024',
    },
    {
      heading: 'On-Demand Services and Apps',
      description: 'Exploring the rise of on-demand services and their impact on various industries.',
      image: 'https://teqnovos.com/wp-content/uploads/2024/04/Real-Estate-App1.jpg',
      author: 'Rohit Sharma',
      date: 'July 10, 2024',
    },
    {
      heading: 'Food Delivery App Development',
      description: 'A deep dive into the best practices for food delivery app development.',
      image: 'https://www.dreamsoft4u.com/wp-content/uploads/2020/11/What-Need-To-Know-For-Food-Delivery-App-Development.jpg',
      author: 'Anita Kumar',
      date: 'July 15, 2024',
    },
    {
      heading: 'Grocery Shopping Apps and Their Future',
      description: 'Understanding how grocery apps are changing the shopping experience.',
      image: 'https://dianapps.com/blog/wp-content/uploads/2023/02/Untitled-design-69.png',
      author: 'Meera Patel',
      date: 'July 20, 2024',
    },
    {
      heading: 'Handyman Apps for Easy Repairs',
      description: 'How handyman apps are making home repairs more accessible.',
      image: 'https://www.fieldcamp.com/wp-content/uploads/2021/04/benefits-of-having-an-app-for-handyman-services.jpg',
      author: 'Amit Desai',
      date: 'July 25, 2024',
    },
    {
      heading: 'Startup Ideas for App Development',
      description: 'Creative ideas for startups focused on app development.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTihPY6C_mWCyZzUzx758VOXWLGK1wPOUXmjw&s',
      author: 'Neha Roy',
      date: 'July 30, 2024',
    },
  ];

  // Auto-change category data every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCategoryIndex((prevIndex) => (prevIndex + 1) % categoryData.length);
    }, 1000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // Get current category data
  const { heading, description, image, author, date } = categoryData[currentCategoryIndex];

  if (loading) {
    return <p>Loading...</p>; // Simple loading state
  }

  return (
    <div className=" py-10">
      <section className="container mx-auto p-8">
        <div id="category-content" className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 bg-white rounded-lg transition-transform transform duration-1000 ease-in-out">
          <div className="relative overflow-hidden rounded-lg">
            <img
              id="category-image"
              className="w-full h-full object-cover rounded-lg transform transition-transform"
              src={image}
              alt="Category Image"
            />
          </div>

          <div className="flex flex-col justify-center space-y-4">
            <h2 id="category-heading" className="text-4xl font-bold text-gray-800 hover:text-purple-700 transition-colors">
              {heading}
            </h2>
            <p id="category-description" className="text-gray-600 text-lg">
              {description}
            </p>
            <p id="category-author" className="text-sm text-gray-500">
              {date} &nbsp;|&nbsp; <span className="text-gray-700 font-bold hover:text-purple-700">{author}</span>
            </p>
          </div>
        </div>
      </section>

      <section id="blog-content" className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-8">
        {blogs.map((blog) => (
          <div key={blog._id} className="bg-white rounded-lg  shadow-[0_10px_25px_rgba(255,168,47,0.3)] transition-transform transform hover:scale-105 hover:shadow-[0_15px_30px_rgba(255,168,47,0.4)] p-6">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-64 object-fill rounded-lg mb-4 transform transition-transform duration-500 hover:scale-110"
            />
            <h3 className="text-xl font-bold text-gray-800 hover:text-orange-500 transition-colors">{blog.title}</h3>
            <p className="text-gray-600 mb-4">{blog.description}</p>
            <p className="text-sm text-gray-500 mb-4">
              {new Date(blog.date).toLocaleDateString()} &nbsp;|&nbsp; <span className="text-gray-700 font-bold hover:text-orange-500">{blog.author}</span>
            </p>
            <i className={`${blog.icon} text-orange-500 text-2xl`}></i>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Blog;
