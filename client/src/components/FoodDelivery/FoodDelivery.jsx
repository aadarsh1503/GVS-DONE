import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faStar, faMapMarkerAlt, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { TbHomeSignal } from "react-icons/tb";
import { GiScooter } from "react-icons/gi";
import { IoFastFoodOutline } from "react-icons/io5";
import { BiStore } from "react-icons/bi";
import FoodFeature from './FoodFeature';
import FoodCarts from './FoodCarts';
import FoodService from './FoodService';
import FoodFAQ from './FoodFAQ';


const FoodDelivery = () => {
    return (
        <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
            <div className=" min-h-screen ">
                {/* First Section (UberEATS Clone App Development) */}
                <section className="flex flex-col py-32  bg-black md:flex-row items-center justify-center ">
                    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                        {/* Left Section */}
                        <div className="max-w-lg space-y-5 mb-6 md:mb-0 md:mr-6">
                            <h1 className="text-4xl font-bold text-white">
                                On Demand<span className='text-blue-600'> Food Delivery App</span> Development
                            </h1>

                            <p className="text-white">
                                Launch your own app like DoorDash, GrubHub, Zomato with our on demand food delivery app development services. From planning to promotion, receive expert consultation at every step, backed by top industry leaders.
                            </p>
                            <div>
                                <li>Build Brand & Reach a Wider Audience </li>
                                <li>Commission-Free Selling</li>
                                <li>100% Secure & Customizable</li>
                            </div>
                            <a
                                href="#"
                                className="inline-block bg-[#007bff] text-white py-3 px-6 rounded-xl font-serif hover:bg-blue-900"
                            >
                                Book a Free Demo
                            </a>
                        </div>

                        {/* Right Section: Slider */}
                        <div className="flex justify-center w-full md:w-[600px] lg:w-[600px] h-[300px] md:h-[500px] overflow-hidden rounded-lg">
                            <img
                                className="w-full h-full object-contain rounded-lg"
                                src="https://img.freepik.com/premium-photo/smartphone-screen-food-delivery-selective-focus_472916-43314.jpg?w=360"
                                alt="Food delivery Clone App"
                            />
                        </div>
                    </div>
                </section>

                <section className="py-12 bg-black">
                    <div className="max-w-9xl mx-auto text-center px-10">
                        <h2 className="text-3xl font-bold text-white">Various <span className='text-[#007bff]'>Food Business Models</span> We Serve</h2>
                        <p className="mt-2 text-white font-serif">
                            Whether you need an app for your restaurant or want to start your food marketplace like Food Delivery, we've got you covered!
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mt-10 px-4">

                        {/* Cost-Effective Solutions */}
                        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                            <div className="flex justify-center mb-4">
                                <BiStore className="text-5xl text-[#007bff]" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800">Cost-Effective Solutions</h3>
                            <p className="mt-2 text-gray-600">Take your business online and grow with our comprehensive ordering and delivery apps.</p>
                        </div>

                        {/* Customizable and Scalable Apps */}
                        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                            <div className="flex justify-center mb-4">
                                <TbHomeSignal className="text-5xl text-[#007bff]" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800">Customizable and Scalable Apps</h3>
                            <p className="mt-2 text-gray-600">Whether you're a small startup or an established enterprise, we create solutions based on your business needs and goals.</p>
                        </div>

                        {/* User-Friendly Interface */}
                        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                            <div className="flex justify-center mb-4">
                                <IoFastFoodOutline className='text-5xl text-[#007bff]' />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800">User-Friendly Interface</h3>
                            <p className="mt-2 text-gray-600">Manage online orders and delivery for all your franchises and chain stores through a single dashboard.</p>
                        </div>

                        {/* Fast Turnaround Time */}
                        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                            <div className="flex justify-center mb-4">
                                <GiScooter className="text-5xl text-[#007bff]" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800">Fast Turnaround Time</h3>
                            <p className="mt-2 text-gray-600">Create a food delivery app to promote your unique food idea and brand.</p>
                        </div>

                    </div>
                </section>

                <FoodFeature />

                <FoodCarts />

                <FoodService />


                {/* Second Section */}
                <section className="py-10 bg-black">
                    <div className="max-w-7xl mx-auto text-center">
                        <h2 className="text-2xl font-bold text-white">
                            The Difference We Make: <span className="text-blue-500">Impact of Our Services</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mt-10 px-6">

                        {/* 71% Block */}
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg shadow-md text-center">
                            <FontAwesomeIcon icon={faShoppingCart} className="text-blue-500 text-3xl mb-2" />
                            <h3 className="text-4xl font-bold text-blue-500">71%</h3>
                            <p className="mt-2 text-gray-600">Quarterly Jump in Total No. of Orders</p>
                        </div>

                        {/* 67% Block */}
                        <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg shadow-md text-center">
                            <FontAwesomeIcon icon={faCreditCard} className="text-orange-500 text-3xl mb-2" />
                            <h3 className="text-4xl font-bold text-orange-500">67%</h3>
                            <p className="mt-2 text-gray-600">Reduction in Social Media Marketing Expenses</p>
                        </div>

                        {/* 60% Block */}
                        <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg shadow-md text-center">
                            <FontAwesomeIcon icon={faStar} className="text-green-500 text-3xl mb-2" />
                            <h3 className="text-4xl font-bold text-green-500">60%</h3>
                            <p className="mt-2 text-gray-600">Quarterly Rise in No. of Repeat Customers</p>
                        </div>

                        {/* 58% Block */}
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg shadow-md text-center">
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-500 text-3xl mb-2" />
                            <h3 className="text-4xl font-bold text-blue-500">58%</h3>
                            <p className="mt-2 text-gray-600">Quarterly Increase in Revenue</p>
                        </div>

                    </div>
                </section>

                <FoodFAQ />

                <section className="py-16 bg-black">
                    <div className="max-w-7xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold font-serif text-white mb-4">
                            Recent <span className="text-[#007bff]">Blogs</span>
                        </h2>
                        <p className="text-white">
                            Keep up to date with our latest insights on on-demand food delivery app development, technology trends, and business strategies.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mt-10 px-4">

                        {/* Blog Post */}
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <img
                                className="w-full h-48 object-cover"
                                src="https://img.freepik.com/free-photo/fruit-salad-spilling-floor-was-mess-vibrant-colors-textures-generative-ai_8829-2895.jpg?t=st=1729414126~exp=1729417726~hmac=2cd542ebc1a24b54f496b38893c408620104fa497133e309fb188504bc8ff01a&w=360"
                                alt="Blog Post 1"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800">On-Demand Delivery App Trends in 2024</h3>
                                <p className="text-gray-600 mt-2">
                                    Discover the latest features and trends shaping the future of on-demand delivery apps.
                                </p>
                            </div>
                        </div>

                        {/* Blog Post */}
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <img
                                className="w-full h-48 object-cover"
                                src="https://img.freepik.com/premium-photo/food-delivery-man-is-riding-scooter-road-fast-cute-cartoon-style-3d_166005-1791.jpg?w=740"
                                alt="Blog Post 2"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800">What to Look for in a Food Delivery App</h3>
                                <p className="text-gray-600 mt-2">
                                    Explore the key functionalities that make a successful food delivery app for 2024.
                                </p>
                            </div>
                        </div>

                        {/* Blog Post */}
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <img
                                className="w-full h-48 object-cover"
                                src="https://img.freepik.com/free-vector/food-delivery-concept-illustration_114360-1693.jpg?w=740&t=st=1697536248~exp=1697536848~hmac=a015ee18626a9f7a9a124d01078c287c184e0409a53c4ebc3982d7bc8be3df4b"
                                alt="Blog Post 3"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800">5 Tips to Grow Your Food Delivery Business</h3>
                                <p className="text-gray-600 mt-2">
                                    Learn how to scale your food delivery business and retain customers.
                                </p>
                            </div>
                        </div>

                    </div>
                </section>

            </div>
        </div>
    )
}

export default FoodDelivery;
