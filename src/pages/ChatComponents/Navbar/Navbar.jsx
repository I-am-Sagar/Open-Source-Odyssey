import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        // Add logic to toggle dark mode (e.g., update CSS classes or theme context)
        document.documentElement.classList.toggle('dark', !isDarkMode);
    };

    return (
        <nav className="bg-white shadow-md fixed w-full top-0 z-10 dark:bg-gray-800">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo, ProjectX, and Title */}
                    <div className="flex items-center">
                        {/* ProjectX Title */}
                        <div
                            className="text-2xl font-bold text-gray-800 dark:text-white cursor-pointer hover:text-gray-600 dark:hover:text-gray-300"
                            onClick={() => navigate('/')}
                        >
                            ProjectX
                        </div>
                        {/* Logo and ChatBot Title */}
                        <div className="flex items-center ml-4">
                            <div className="flex-shrink-0">
                                <img
                                    className="h-8 w-8"
                                    src="https://cdn-icons-png.flaticon.com/512/4712/4712035.png" // Replace with your logo URL
                                    alt="Logo"
                                />
                            </div>
                            <div className="ml-3 text-xl font-semibold text-gray-800 dark:text-white">
                                ChatBot
                            </div>
                        </div>
                    </div>

                    {/* Settings Dropdown */}
                    <div className="flex items-center relative">
                        <button
                            className="p-2 text-gray-500 hover:text-gray-700 focus:outline-none dark:text-gray-400 dark:hover:text-gray-200"
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;