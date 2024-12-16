import React, { useState } from 'react';

export default function Satwaendemiksuperadmin() {
    const [satwaEndemik, setSatwaEndemik] = useState([]);
    const [newSatwaEndemik, setNewSatwaEndemik] = useState({ id: '', nama: '', deskripsi: '', gambar: '' });
    const [error, setError] = useState('');

    // Menambah satwa endemik
    const tambahSatwaEndemik = () => {
        if (!newSatwaEndemik.id || !newSatwaEndemik.nama || !newSatwaEndemik.deskripsi || !newSatwaEndemik.gambar) {
            setError('Semua field harus diisi!');
            return;
        }

        // Cek apakah ID satwa sudah ada
        if (satwaEndemik.some(satwa => satwa.id === newSatwaEndemik.id)) {
            setError('ID Satwa sudah ada!');
            return;
        }

        setSatwaEndemik([...satwaEndemik, newSatwaEndemik]);
        setNewSatwaEndemik({ id: '', nama: '', deskripsi: '', gambar: '' });
        setError('');
    };

    // Menghapus satwa endemik dengan konfirmasi
    const hapusSatwaEndemik = (id) => {
        if (window.confirm('Apakah Anda yakin ingin menghapus satwa ini?')) {
            setSatwaEndemik(satwaEndemik.filter(satwa => satwa.id !== id));
        }
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl mb-4">Satwa Endemik</h2>
            {error && <div className="text-red-500 mb-4">{error}</div>}

            <input
                type="text"
                placeholder="ID Satwa"
                value={newSatwaEndemik.id}
                onChange={(e) => setNewSatwaEndemik({ ...newSatwaEndemik, id: e.target.value })}
                className="mb-2 p-2 border"
            />
            <input
                type="text"
                placeholder="Nama Satwa"
                value={newSatwaEndemik.nama}
                onChange={(e) => setNewSatwaEndemik({ ...newSatwaEndemik, nama: e.target.value })}
                className="mb-2 p-2 border"
            />
            <textarea
                placeholder="Deskripsi Satwa"
                value={newSatwaEndemik.deskripsi}
                onChange={(e) => setNewSatwaEndemik({ ...newSatwaEndemik, deskripsi: e.target.value })}
                className="mb-2 p-2 border"
            />
            <input
                type="text"
                placeholder="URL Gambar Satwa"
                value={newSatwaEndemik.gambar}
                onChange={(e) => setNewSatwaEndemik({ ...newSatwaEndemik, gambar: e.target.value })}
                className="mb-2 p-2 border"
            />
            <button onClick={tambahSatwaEndemik} className="bg-green-500 text-white py-2 px-4 rounded">Tambah Satwa Endemik</button>

            <h3 className="text-xl mt-4">Daftar Satwa Endemik</h3>
            <ul>
                {satwaEndemik.map(satwa => (
                    <li key={satwa.id} className="flex justify-between mb-2">
                        <div>
                            <strong>{satwa.nama}</strong>
                            <p>{satwa.deskripsi}</p>
                        </div>
                        <img src={satwa.gambar} alt={satwa.nama} className="w-20 h-20 object-cover" />
                        <button
                            onClick={() => hapusSatwaEndemik(satwa.id)}
                            className="bg-red-500 text-white py-1 px-2 rounded"
                        >
                            Hapus
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
