import React from 'react';

export default function Admin({ setCurrentPage }) {
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
                USER MANAGEMENT
            </button>
            <button
                className="bg-transparent border border-white text-white font-bold py-2 px-4 rounded-full w-full mb-4"
                onClick={() => setCurrentPage('report')}
            >
                LAPORAN
            </button>

            {/* Tombol Logout di pojok kiri bawah */}
            <button
                className="bg-transparent border border-white text-white font-bold py-2 px-4 rounded-full w-full mt-auto"
                onClick={() => {
                    // Implementasikan fungsi logout di sini
                    console.log('Logged out');
                }}
            >
                LOGOUT
            </button>
        </div>
    );
}
