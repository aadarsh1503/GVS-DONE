import React, { useEffect, useState } from 'react';
import { AiOutlinePhone, AiOutlineMail, AiOutlineMessage, AiOutlineCalendar, AiOutlineDelete, AiOutlineCopy, AiOutlineSearch } from 'react-icons/ai';

const ContactAdmin = () => {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedContact, setSelectedContact] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchContactDetails = async () => {
            try {
                const response = await fetch('https://gsv-12-4.onrender.com/api/contact/');
                if (!response.ok) {
                    throw new Error('Failed to fetch contacts');
                }
                const data = await response.json();
                setContacts(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchContactDetails();
    }, []);

    const deleteContact = async (id) => {
        try {
            const response = await fetch(`https://gsv-12-4.onrender.com/api/contact/${id}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Failed to delete contact');
            }

            setContacts((prevContacts) => prevContacts.filter(contact => contact._id !== id));
        } catch (err) {
            setError(err.message);
        }
    };

    const handleContactClick = (contact) => {
        setSelectedContact(contact);
    };

    const handleCancel = () => {
        setSelectedContact(null);
    };

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
    };

    // Filter contacts based on the search term
    const filteredContacts = contacts.filter(contact => {
        const searchRegex = new RegExp(searchTerm, 'i'); // Case-insensitive search
        return (
            searchRegex.test(contact.name) ||
            searchRegex.test(contact.email) ||
            searchRegex.test(contact.phoneNumber) ||
            searchRegex.test(contact.message)
        );
    });

    return (
        <div className="container mx-auto p-8 bg-gray-50 min-h-screen">
            <h1 className="text-4xl md:text-8xl font-bebas mb-10 mt-32 lg:mt-32 text-center text-gradient">
                Contact <span className=''>Details</span>
            </h1>

            {loading && <p className="text-center text-gray-500">Loading...</p>}
            {error && <p className="text-center text-red-500">{error}</p>}

            {/* Search Bar */}
            <div className="flex justify-center mb-6">
                <div className="relative w-full max-w-md">
                    <input
                        type="text"
                        className="w-full h-12 pl-10 pr-4 border border-black rounded-full focus:outline-none outline-1 outline-black  focus:ring-2 focus:ring-blue-500"
                        placeholder="Search by name, email, phone or message..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <AiOutlineSearch className="absolute left-4 top-4 text-gray-400" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
                {filteredContacts.map((contact, index) => (
                    <div 
                        key={contact._id} 
                        className="relative bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 overflow-hidden"
                        onClick={() => handleContactClick(contact)}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 opacity-20 rounded-xl pointer-events-none"></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl font-bebas text-gray-800 mb-4">{index + 1}. {contact.name}</h2>
                            <div className="flex items-center space-x-2 mb-3 text-gray-600">
                                <AiOutlinePhone className="text-2xl text-blue-600" />
                                <span>{contact.phoneNumber}</span>
                            </div>
                            <div className="flex items-center space-x-2 mb-3 text-gray-600">
                                <AiOutlineMail className="text-2xl text-blue-600" />
                                <span>{contact.email}</span>
                            </div>
                            <div className="flex items-start space-x-2 mb-3 text-gray-600">
                                <AiOutlineMessage className="text-2xl text-blue-600" />
                                <span className="break-words">{contact.message}</span>
                            </div>
                            <div className="flex items-center space-x-2 text-gray-600">
                                <AiOutlineCalendar className="text-2xl text-blue-600" />
                                <span>{new Date(contact.createdAt).toLocaleDateString()}</span>
                            </div>
                        </div>
                        <button 
                            onClick={(e) => { e.stopPropagation(); deleteContact(contact._id); }}
                            className="mt-6 bg-red-600 text-white py-2 px-6 rounded-full hover:bg-red-700 transition-transform transform hover:scale-105 flex items-center space-x-2"
                        >
                            <AiOutlineDelete />
                            <span>Delete</span>
                        </button>
                    </div>
                ))}
            </div>

            {selectedContact && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg w-11/12 md:w-1/3 border border-black">
                        <h2 className="text-3xl font-bold mb-6 outline-6 rounded-xl p-4 outline border text-gray-800 serif text-center">{selectedContact.name}</h2>
                        <div className="mb-6">
                            <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
                                <div className="flex items-center">
                                    <AiOutlinePhone className="mr-2 text-blue-600 text-2xl" />
                                    <span className="text-gray-700 outline-6 rounded-xl p-4 outline border text-lg serif">{selectedContact.phoneNumber}</span>
                                    <button 
                                        onClick={() => copyToClipboard(selectedContact.phoneNumber)}
                                        className="ml-2 text-gray-600 hover:text-blue-600 transition-colors"
                                    >
                                        <AiOutlineCopy className="text-xl" />
                                    </button>
                                </div>
                                <div className="flex items-center">
                                    <AiOutlineMail className="mr-2 text-blue-600 text-2xl" />
                                    <span className="text-gray-700 outline-6 rounded-xl p-4 outline border text-lg serif">{selectedContact.email}</span>
                                    <button 
                                        onClick={() => copyToClipboard(selectedContact.email)}
                                        className="ml-2 text-gray-600 hover:text-blue-600 transition-colors"
                                    >
                                        <AiOutlineCopy className="text-xl" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="mb-6">
                            <p className="text-gray-700 text-lg serif flex items-center mb-4">
                                <AiOutlineMessage className="mr-2 text-blue-600 text-2xl" />
                                {selectedContact.message}
                            </p>
                        </div>
                        <p className="text-gray-700 text-sm flex items-center mb-4">
                            <AiOutlineCalendar className="mr-2 text-blue-600 text-2xl" /> 
                            {new Date(selectedContact.createdAt).toLocaleDateString()}
                        </p>
                        <button onClick={handleCancel} className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ContactAdmin;
