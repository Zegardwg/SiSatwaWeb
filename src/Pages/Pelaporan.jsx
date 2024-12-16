import React, { useState } from 'react';
import Footer from '../Component/Footer';
import Headernavbar from '../Component/Headernavbar';
import ProvinsiList from "../API/Lokasi/ProvinsiList";
import KabupatenList from "../API/Lokasi/KabupatenList";
import KecamatanList from "../API/Lokasi/KecamatanList";
import KelurahanList from "../API/Lokasi/KelurahanList";
import { useNavigate } from "react-router-dom";

export default function Pelaporan() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedProvinsi, setSelectedProvinsi] = useState(null);
    const [selectedKabupaten, setSelectedKabupaten] = useState(null);
    const [selectedKecamatan, setSelectedKecamatan] = useState(null);
    const [setSelectedKelurahan] = useState(null);

    const navigate = useNavigate(); // Inisialisasi useNavigate

    // Fungsi untuk menangani unggah gambar
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Kirim data laporan, termasuk provinsi yang dipilih
        console.log({
            provinsi: selectedProvinsi,
            // tambahkan data lainnya
        });
    };

    return (
        <>
            <Headernavbar />
            <main>
                <section className="relative">
                    <img src="src/assets/Tiger.png" alt="Two tigers in a forest" className="w-full h-96 object-cover" />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
                        <h1 className="text-4xl font-bold">PELAPORAN</h1>
                        <p className="mt-4 text-center max-w-2xl">
                            Jika Anda mengetahui adanya perdagangan satwa liar ilegal, silakan laporkan melalui formulir di bawah ini. Informasi Anda akan sangat membantu kami dalam melindungi satwa dan menjaga ekosistem.
                        </p>
                    </div>
                </section>
                <section className="bg-gray-200 py-12">
                    <div className="container mx-auto bg-white p-8 shadow-md rounded-md">
                        <h2 className="text-2xl font-bold text-center mb-6">
                            Laporkan <span className="text-green-700">Perdagangan Satwa Liar Ilegal</span> dibawah ini
                        </h2>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label className="block text-lg font-bold mb-2" htmlFor="name">NAMA:</label>
                                <input type="text" id="name" className="w-full border border-gray-300 p-2 rounded-md" />
                            </div>
                            <div>
                                <label className="block text-lg font-bold mb-2" htmlFor="email">EMAIL:</label>
                                <input type="email" id="email" className="w-full border border-gray-300 p-2 rounded-md" />
                            </div>
                            <div>
                                <label className="block text-lg font-bold mb-2" htmlFor="report">LAPORAN ANDA:</label>
                                <textarea id="report" className="w-full border border-gray-300 p-2 rounded-md h-32"></textarea>
                            </div>
                            {/* Lokasi */}
                            <div>
                                <label
                                    htmlFor="lokasi"
                                    className="block text-lg font-bold mb-2"
                                >
                                    LOKASI KEJADIAN
                                </label>
                                <ProvinsiList onProvinsiSelect={setSelectedProvinsi} />
                                {selectedProvinsi && (
                                    <KabupatenList
                                        provinsiId={selectedProvinsi}
                                        onKabupatenSelect={setSelectedKabupaten}
                                    />
                                )}
                                {selectedKabupaten && (
                                    <KecamatanList
                                        kabupatenId={selectedKabupaten}
                                        onKecamatanSelect={setSelectedKecamatan}
                                    />
                                )}
                                {selectedKecamatan && (
                                    <KelurahanList
                                        kecamatanId={selectedKecamatan}
                                        onKelurahanSelect={setSelectedKelurahan}
                                    />
                                )}
                            </div>
                            <div>
                                <label className="block text-lg font-bold mb-2" htmlFor="image">UNGGAH GAMBAR:</label>
                                <input
                                    type="file"
                                    id="image"
                                    accept="image/*"
                                    className="w-full border border-gray-300 p-2 rounded-md"
                                    onChange={handleImageUpload}
                                />
                                {selectedImage && (
                                    <div className="mt-4">
                                        <p>Pratinjau Gambar:</p>
                                        <img src={selectedImage} alt="Selected" className="mt-2 max-h-48 rounded-md shadow-md" />
                                    </div>
                                )}
                            </div>
                            <div className="text-center space-y-4">
                                <button
                                    type="submit"
                                    className="bg-green-700 text-white px-6 py-2 rounded-md transition-transform transform hover:scale-105 hover:bg-green-800"
                                >
                                    KIRIM LAPORAN
                                </button>
                                {/* Tambahkan tombol untuk Tabel Laporan */}
                                <button
                                    type="button"
                                    className="bg-blue-700 text-white px-6 py-2 rounded-md transition-transform transform hover:scale-105 hover:bg-blue-800"
                                    onClick={() => navigate("/Verifikasi")}
                                >
                                    TABEL LAPORAN
                                </button>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
