import React, { useState } from 'react';

export default function Report() {
    const [reports, setReports] = useState([]);

    const addReport = () => {
        const newReport = {
            id: Date.now(),
            nama: '',
            email: '',
            laporan: '',
            lokasi: '',
            gambar: '',
            status: 'Diproses' // Status default
        };
        setReports([...reports, newReport]);
    };

    const updateReport = (id, field, value) => {
        setReports(reports.map(report => (report.id === id ? { ...report, [field]: value } : report)));
    };

    const deleteReport = (id) => {
        setReports(reports.filter(report => report.id !== id));
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">LAPORAN</h1>
            <button className="bg-green-500 text-black font-bold py-2 px-4 rounded-full mb-4" onClick={addReport}>
                ADD LAPORAN
            </button>
            <table className="w-full border-collapse">
                <thead>
                    <tr className="bg-green-500 text-black">
                        <th className="border p-2">ID</th>
                        <th className="border p-2">NAMA</th>
                        <th className="border p-2">EMAIL</th>
                        <th className="border p-2">LAPORAN</th>
                        <th className="border p-2">LOKASI</th>
                        <th className="border p-2">GAMBAR</th>
                        <th className="border p-2">STATUS</th>
                        <th className="border p-2">ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {reports.map(report => (
                        <tr key={report.id}>
                            <td className="border p-2">{report.id}</td>
                            <td className="border p-2">
                                <input
                                    type="text"
                                    value={report.nama}
                                    onChange={(e) => updateReport(report.id, 'nama', e.target.value)}
                                    className="w-full border rounded"
                                />
                            </td>
                            <td className="border p-2">
                                <input
                                    type="text"
                                    value={report.email}
                                    onChange={(e) => updateReport(report.id, 'email', e.target.value)}
                                    className="w-full border rounded"
                                />
                            </td>
                            <td className="border p-2">
                                <input
                                    type="text"
                                    value={report.laporan}
                                    onChange={(e) => updateReport(report.id, 'laporan', e.target.value)}
                                    className="w-full border rounded"
                                />
                            </td>
                            <td className="border p-2">
                                <input
                                    type="text"
                                    value={report.lokasi}
                                    onChange={(e) => updateReport(report.id, 'lokasi', e.target.value)}
                                    className="w-full border rounded"
                                />
                            </td>
                            <td className="border p-2">
                                <input
                                    type="text"
                                    value={report.gambar}
                                    onChange={(e) => updateReport(report.id, 'gambar', e.target.value)}
                                    className="w-full border rounded"
                                />
                            </td>
                            <td className="border p-2">
                                <select
                                    value={report.status}
                                    onChange={(e) => updateReport(report.id, 'status', e.target.value)}
                                    className="w-full border rounded"
                                >
                                    <option value="Diproses">Diproses</option>
                                    <option value="Telah Selesai">Telah Selesai</option>
                                    <option value="Ditolak">Ditolak</option>
                                </select>
                            </td>
                            <td className="border p-2">
                                <button
                                    className="bg-red-500 text-white py-1 px-2 rounded"
                                    onClick={() => deleteReport(report.id)}
                                >
                                    DELETE
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
