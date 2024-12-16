import React from 'react';

export default function Dashboardsuperadmin() {
    return (
        <div className="relative w-full h-screen">
            {/* Gambar sebagai latar belakang */}
            <img 
                src="/assets/Harimau.jpg"  // Pastikan path gambar sesuai dengan struktur folder Anda
                alt="SiSatwa" 
                className="w-full h-full object-cover rounded-lg"
            />
            
            {/* Konten di kiri atas */}
            <div className="absolute top-4 left-4 text-left text-white">
                <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
                <p className="text-xl">Selamat datang di panel Super Admin SiSatwa!</p>
            </div>
        </div>
    );
}
