import React from 'react';
import { Link } from 'react-router-dom'; // Impor Link untuk navigasi antar halaman
import Headernavbar from '../Component/Headernavbar';
import Footer from '../Component/Footer';

export default function SatwaInvasif() {
    return (
        <div>
            <Headernavbar />
            <section className="relative">
                <img src="src/assets/Tiger.png" alt="Tigers in the forest" className="w-full h-96 object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 text-3xl font-bold">
                    GALERI SATWA
                </div>
            </section>
            <section className="bg-[#5A2A0C] text-white text-center p-4">
                <p className="text-xl md:text-2xl lg:text-2xl">
                    Galeri Satwa Invasif menampilkan spesies non-asli yang mengancam ekosistem Indonesia. Temukan dampak negatif mereka terhadap flora dan fauna lokal serta pentingnya pengendalian satwa invasif untuk menjaga keseimbangan lingkungan.
                </p>
            </section>
            <section className="bg-gray-100 p-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-9">SATWA INVASIF</h2>
                <div className="flex justify-center mb-9">
                    <input type="text" placeholder="Cari" className="p-2 border border-gray-300 rounded-l" />
                    <button className="bg-green-500 text-white p-2 rounded-r">Cari</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-white shadow-md rounded overflow-hidden">
                        <img src="src/assets/Calotes.jpg" alt="Bunglon Taman" className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105" />
                        <div className="p-4">
                            <h3 className="text-lg md:text-xl font-bold">Bunglon Taman</h3>
                            <p className="text-gray-500">(Calotes Versicolor)</p>
                            <Link to="/BunglonTaman">
                                <button className="bg-blue-600 text-white px-4 py-2 rounded transition-transform transform hover:scale-105 hover:bg-blue-700">
                                    Deskripsi
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="bg-white shadow-md rounded overflow-hidden">
                        <img src="src/assets/Ikansapusapu.jpg" alt="Ikan Sapu sapu" className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105" />
                        <div className="p-4">
                            <h3 className="text-lg md:text-xl font-bold">Ikan Sapu Sapu</h3>
                            <p className="text-gray-500">(Hypostomus plecostomus)</p>
                            <button className="bg-blue-600 text-white px-4 py-2 rounded transition-transform transform hover:scale-105 hover:bg-blue-700">
                                Deskripsi
                            </button>
                        </div>
                    </div>
                    <div className="bg-white shadow-md rounded overflow-hidden">
                        <img src="src/assets/Arapaima.jpg" alt="Ikan Arapaima" className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105" />
                        <div className="p-4">
                            <h3 className="text-lg md:text-xl font-bold">Ikan Arapaima</h3>
                            <p className="text-gray-500">(Arapaima Gigas)</p>
                            <button className="bg-blue-600 text-white px-4 py-2 rounded transition-transform transform hover:scale-105 hover:bg-blue-700">
                                Deskripsi
                            </button>
                        </div>
                    </div>
                    <div className="bg-white shadow-md rounded overflow-hidden">
                        <img src="src/assets/Kurakura.jpg" alt="Kura Kura Brazil" className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105" />
                        <div className="p-4">
                            <h3 className="text-lg md:text-xl font-bold">Kura Kura Brazil</h3>
                            <p className="text-gray-500">(Trachemys scripta elegans)</p>
                            <button className="bg-blue-600 text-white px-4 py-2 rounded transition-transform transform hover:scale-105 hover:bg-blue-700">
                                Deskripsi
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between mt-8">
                    <button className="p-2 bg-gray-200 rounded-full"><i className="fas fa-chevron-left"></i></button>
                    <button className="p-2 bg-gray-200 rounded-full"><i className="fas fa-chevron-right"></i></button>
                </div>
            </section>
            <Footer />
        </div>
    );
}
