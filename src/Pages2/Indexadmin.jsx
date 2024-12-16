import React, { useState } from 'react';
import Admin from './Admin';// Pastikan pathnya benar
import Dashboardadmin from './Dashboardadmin'; // Pastikan pathnya benar
import Report from './Report'; // Pastikan pathnya benar
import Usermanagementadmin from './Usermanagementadmin'; // Pastikan pathnya benar

export default function Indexadmin() {
    const [currentPage, setCurrentPage] = useState('Dashboardadmin');

    const renderPage = () => {
        switch (currentPage) {
            case 'Dashboardadmin':
                return <Dashboardadmin />;
            case 'user-management':
                return <Usermanagementadmin />;
            case 'report':
                return <Report />;
            default:
                return <Dashboardadmin />;
        }
    };

    return (
        <div className="flex">
            {/* Sidebar */}
            <Admin setCurrentPage={setCurrentPage} />
            
            {/* Main Content */}
            <div className="flex-1 p-6">
                {renderPage()}
            </div>
        </div>
    );
}
