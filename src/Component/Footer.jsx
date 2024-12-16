import React from 'react';

export default function Footer() {
    return (
        <footer className="flex flex-col items-center justify-center bg-[#5A2A0C] text-white py-8">
            <div className="flex flex-col items-center mb-8">
                <img src="src/assets/Logo.png" alt="Logo of a deer" className="mb-2 w-16 h-auto" /> {/* Ukuran logo diperkecil */}
                <h1 className="font-bold text-xl">SiSatwa</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 text-center">
                <div className="col-span-1 sm:col-span-2 md:col-span-1">
                    <p>SiSatwa - Sistem Informasi Satwa dan Pelaporan Perdagangan Satwa Ilegal</p>
                </div>
                <div className="col-span-1">
                    <h2 className="font-bold">Company</h2>
                    <p>Tentang Kami</p>
                    <p>Dokumentasi</p>
                    <p>Alamat</p>
                </div>
                <div className="col-span-1">
                    <h2 className="font-bold">Region</h2>
                    <p>Indonesia</p>
                </div>
                <div className="col-span-1">
                    <h2 className="font-bold">Contact</h2>
                    <p>800-500-123</p>
                </div>
                <div className="col-span-1">
                    <h2 className="font-bold">Sosial Media Kami:</h2>
                    <div className="flex justify-center space-x-2 mt-2">
                        <a href="#" className="bg-blue-500 p-2 rounded" aria-label="Facebook">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="bg-red-500 p-2 rounded" aria-label="Instagram">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#" className="bg-black p-2 rounded" aria-label="Twitter">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="mt-8 text-sm text-center">
                <p>&copy; {new Date().getFullYear()} SiSatwa. All rights reserved.</p>
            </div>
        </footer>
    );
}
