import React, { useState } from 'react';
import SuperAdmin from './SuperAdmin'; // Import halaman navigasi utama
import Dashboardsuperadmin from './Dashboardsuperadmin';
import Usermanagementsuperadmin from './Usermanagementsuperadmin'; // Pastikan ini sesuai dengan nama komponen
import Adminmanagement from './Adminmanagement'; // Import manajemen admin
import Satwaendemik from './Satwaendemiksuperadmin'; // Import satwa endemik
import Satwainvasif from './Satwainvasifsuperadmin'; // Import satwa invasif
import Berita from './Berita'; // Import berita

export default function Indexsuperadmin() {
    const [currentPage, setCurrentPage] = useState('Dashboardsuperadmin'); // State untuk halaman yang aktif

    // Menampilkan halaman sesuai dengan currentPage
    const renderPage = () => {
        switch (currentPage) {
            case 'Dashboardsuperadmin':
                return <Dashboardsuperadmin />;
            case 'Usermanagementsuperadmin': // Sesuaikan dengan nama yang benar
                return <Usermanagementsuperadmin />;
            case 'Adminmanagement':
                return <Adminmanagement />;
            case 'Satwaendemiksuperadmin':
                return <Satwaendemik />;
            case 'Satwainvasifsuperadmin':
                return <Satwainvasif />;
            case 'Berita':
                return <Berita />;
            default:
                return <div className="p-4">Halaman tidak ditemukan!</div>;
        }
    };

    return (
        <div className="flex">
            <SuperAdmin setCurrentPage={setCurrentPage} />
            <div className="flex-1 p-6">
                {renderPage()}
            </div>
        </div>
    );
}
