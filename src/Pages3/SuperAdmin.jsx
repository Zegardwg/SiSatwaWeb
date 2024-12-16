import React from 'react';

export default function SuperAdmin({ setCurrentPage }) {
    return (
        <div className="w-1/4 h-screen bg-black text-white p-4 flex flex-col">
            <div className="flex items-center mb-6">
                <img src="src/assets/Logo.png" alt="Logo" className="rounded-full mr-2" />
                <span className="text-xl font-bold">SiSatwa</span>
            </div>
            <button
                className="bg-transparent border border-white text-white font-bold py-2 px-4 rounded-full w-full mb-4"
                onClick={() => setCurrentPage('Dashboardadmin')}
            >
                DASHBOARD
            </button>
            <button
                className="bg-transparent border border-white text-white font-bold py-2 px-4 rounded-full w-full mb-4"
                onClick={() => setCurrentPage('user-management')}
            >
                MANAJEMEN PENGGUNA
            </button>
            <button
                className="bg-transparent border border-white text-white font-bold py-2 px-4 rounded-full w-full mb-4"
                onClick={() => setCurrentPage('admin-management')}
            >
                MANAJEMEN ADMIN
            </button>
            <button
                className="bg-transparent border border-white text-white font-bold py-2 px-4 rounded-full w-full mb-4"
                onClick={() => setCurrentPage('endemic-animal')}
            >
                SATWA ENDEMIK
            </button>
            <button
                className="bg-transparent border border-white text-white font-bold py-2 px-4 rounded-full w-full mb-4"
                onClick={() => setCurrentPage('invasive-animal')}
            >
                SATWA INVASIF
            </button>
            <button
                className="bg-transparent border border-white text-white font-bold py-2 px-4 rounded-full w-full mb-4"
                onClick={() => setCurrentPage('news')}
            >
                BERITA
            </button>
            <button
                className="bg-transparent border border-white text-white font-bold py-2 px-4 rounded-full w-full mt-auto"
                onClick={() => {
                    console.log('Keluar');
                }}
            >
                KELUAR
            </button>
        </div>
    );
}
