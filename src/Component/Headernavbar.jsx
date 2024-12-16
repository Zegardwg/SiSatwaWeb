import React, { useState } from 'react'; 
import logo from '../assets/Logo2.png';
import backgroundImage from '../assets/BGNavbar.jpg';
import profileIcon from '../assets/Komodo2.png'; 

export default function Headernavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleProfileMenu = () => {
        setIsProfileMenuOpen(!isProfileMenuOpen);
    };

    return (
        <div className="background-image" style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
        }}>
            <div className="flex items-center justify-between p-4">
                <div>
                    <img src={logo} alt="SiSatwa Logo" className="ml-2 h-10" />
                </div>
                <div className="hidden md:flex items-center space-x-3">
                    <a href="/Dashboard" className="text-white text-lg hover:text-blue-500">Home</a>
                    <a href="#" className="text-white text-lg hover:text-blue-500">Tentang</a>
                    <div className="relative z-50"> {/* Menambahkan z-index */}
                        <button 
                            className="flex items-center" 
                            onClick={toggleProfileMenu}
                        >
                            <img 
                                src={profileIcon} 
                                alt="Profile" 
                                className="h-10 w-10 rounded-full border border-white hover:bg-blue-500 transition duration-300"
                            />
                        </button>
                        {isProfileMenuOpen && (
                            <div 
                                className="absolute right-0 mt-2 bg-gray-800 text-white rounded-md shadow-lg z-50" 
                                style={{ minWidth: '150px' }}
                            >
                                <a 
                                    href="/Landing" 
                                    className="block px-4 py-2 hover:bg-blue-500"
                                >
                                    Logout
                                </a>
                            </div>
                        )}
                    </div>
                </div>
                <div className="md:hidden">
                    <button 
                        id="menu-toggle" 
                        className="text-white text-lg" 
                        onClick={toggleMenu}
                    >
                        ☰
                    </button> 
                </div>
            </div>
            <div 
                id="mobile-menu" 
                className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} z-40`} 
                style={{ position: 'relative' }}
            >
                <a href="/Dashboard" className="block text-white text-lg hover:text-blue-500 p-2">Home</a>
                <a href="#" className="block text-white text-lg hover:text-blue-500 p-2">Tentang</a>
                <a href="#" className="block text-white text-lg hover:text-blue-500 p-2">Logout</a>
            </div>
        </div>
    );
}
