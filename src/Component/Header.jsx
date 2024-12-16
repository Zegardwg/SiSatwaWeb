import React, { useState } from 'react'; // Impor useState untuk mengelola state
import { Link } from 'react-router-dom'; // Impor Link dari react-router-dom
import logo from '../assets/Logo2.png';
import backgroundImage from '../assets/BGNavbar.jpg';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State untuk menu mobile

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Mengubah status menu mobile
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
                <div className="hidden md:flex items-center space-x-3"> {/* Tampilkan tab bar pada layar medium ke atas */}
                    <Link to="/Dashboard" className="text-white text-lg hover:text-blue-500">Home</Link>
                    <Link to="/Tentang" className="text-white text-lg hover:text-blue-500">Tentang</Link>
                    <div className="space-x-2"> {/* Container untuk tombol Sign In dan Sign Up */}
                        <Link to="/Login">
                            <button className="text-white border border-white rounded-full px-4 py-1 font-bold transition-colors duration-300 ease-in-out transform hover:bg-blue-500 hover:text-white hover:scale-105">Sign In</button>
                        </Link>
                        <Link to="/Register">
                            <button className="text-white border border-white rounded-full px-4 py-1 font-bold transition-colors duration-300 ease-in-out transform hover:bg-blue-500 hover:text-white hover:scale-105">Sign Up</button>
                        </Link>
                    </div>
                </div>
                <div className="md:hidden"> {/* Menyembunyikan tab bar pada layar kecil */}
                    <button 
                        id="menu-toggle" 
                        className="text-white text-lg" 
                        onClick={toggleMenu} // Menambahkan event onClick
                    >
                        ☰
                    </button> 
                </div>
            </div>
            <div id="mobile-menu" className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}> {/* Menu mobile */}
                <Link to="/Dashboard" className="block text-white text-lg hover:text-blue-500 p-2">Home</Link>
                <Link to="/Tentang" className="block text-white text-lg hover:text-blue-500 p-2">Tentang</Link>
                <Link to="/Login" className="block text-white text-lg hover:text-blue-500 p-2">Sign In</Link> {/* Sign In */}
                <Link to="/Register" className="block text-white text-lg hover:text-blue-500 p-2">Sign Up</Link> {/* Sign Up */}
            </div>
        </div>
    );
}
