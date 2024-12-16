import React from "react";
import Footer from "../Component/Footer";
import Headernavbar from "../Component/Headernavbar";
import { useNavigate } from "react-router-dom"; // Import useNavigate

export default function Verifikasi() {
    const navigate = useNavigate(); // Inisialisasi useNavigate

    // Contoh data laporan (bisa diganti dengan data dari backend)
    const laporanData = [
        {
            id: 1,
            nama: "Arvin Danuarta",
            email: "arvin@example.com",
            Laporan: "Terjadi perdagangan harimau di Pasar XYZ.",
            lokasi: "Pasar XYZ, Jakarta",
            status: "Sedang Diproses",
        },
        {
            id: 2,
            nama: "Dina Rahmawati",
            email: "dina@example.com",
            Laporan: "Penyelundupan burung langka di Pelabuhan ABC.",
            lokasi: "Pelabuhan ABC, Surabaya",
            status: "Sedang Diproses",
        },
    ];

    return (
        <>
            <Headernavbar />
            <main>
                <section className="py-12 bg-gray-100">
                    <div className="container mx-auto bg-white p-8 shadow-md rounded-md">
                        <h2 className="text-2xl font-bold text-gray-700 mb-6 text-center">
                            Daftar Laporan
                        </h2>
                        <div className="overflow-x-auto">
                            <table className="table-auto w-full border border-gray-300">
                                <thead>
                                    <tr className="bg-gray-200 text-gray-700">
                                        <th className="px-4 py-2 border">No</th>
                                        <th className="px-4 py-2 border">Nama</th>
                                        <th className="px-4 py-2 border">Email</th>
                                        <th className="px-4 py-2 border">Laporan</th>
                                        <th className="px-4 py-2 border">Lokasi</th>
                                        <th className="px-4 py-2 border">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {laporanData.map((laporan, index) => (
                                        <tr key={laporan.id} className="text-center">
                                            <td className="px-4 py-2 border">{index + 1}</td>
                                            <td className="px-4 py-2 border">{laporan.nama}</td>
                                            <td className="px-4 py-2 border">{laporan.email}</td>
                                            <td className="px-4 py-2 border">{laporan.Laporan}</td>
                                            <td className="px-4 py-2 border">{laporan.lokasi}</td>
                                            <td className="px-4 py-2 border text-yellow-600 font-semibold">
                                                {laporan.status}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="text-center mt-8">
                            <button
                                className="bg-blue-700 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition-transform transform hover:scale-105"
                                onClick={() => navigate("/dashboard")} // Navigasi ke Dashboard
                            >
                                Kembali ke Dashboard
                            </button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
