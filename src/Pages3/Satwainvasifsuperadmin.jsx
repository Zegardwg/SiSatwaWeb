import React, { useState } from 'react';

export default function Satwainvasifsuperadmin() {
    const [satwaInvasif, setSatwaInvasif] = useState([]);
    const [newSatwaInvasif, setNewSatwaInvasif] = useState({ id: '', nama: '', deskripsi: '', gambar: '' });
    const [error, setError] = useState('');

    // Menambah satwa invasif
    const tambahSatwaInvasif = () => {
        if (!newSatwaInvasif.id || !newSatwaInvasif.nama || !newSatwaInvasif.deskripsi || !newSatwaInvasif.gambar) {
            setError('Semua field harus diisi!');
            return;
        }

        // Cek apakah ID satwa sudah ada
        if (satwaInvasif.some(satwa => satwa.id === newSatwaInvasif.id)) {
            setError('ID Satwa sudah ada!');
            return;
        }

        setSatwaInvasif([...satwaInvasif, newSatwaInvasif]);
        setNewSatwaInvasif({ id: '', nama: '', deskripsi: '', gambar: '' });
        setError('');
    };

    // Menghapus satwa invasif dengan konfirmasi
    const hapusSatwaInvasif = (id) => {
        if (window.confirm('Apakah Anda yakin ingin menghapus satwa ini?')) {
            setSatwaInvasif(satwaInvasif.filter(satwa => satwa.id !== id));
        }
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl mb-4">Satwa Invasif</h2>
            {error && <div className="text-red-500 mb-4">{error}</div>}

            <input
                type="text"
                placeholder="ID Satwa"
                value={newSatwaInvasif.id}
                onChange={(e) => setNewSatwaInvasif({ ...newSatwaInvasif, id: e.target.value })}
                className="mb-2 p-2 border"
            />
            <input
                type="text"
                placeholder="Nama Satwa"
                value={newSatwaInvasif.nama}
                onChange={(e) => setNewSatwaInvasif({ ...newSatwaInvasif, nama: e.target.value })}
                className="mb-2 p-2 border"
            />
            <textarea
                placeholder="Deskripsi Satwa"
                value={newSatwaInvasif.deskripsi}
                onChange={(e) => setNewSatwaInvasif({ ...newSatwaInvasif, deskripsi: e.target.value })}
                className="mb-2 p-2 border"
            />
            <input
                type="text"
                placeholder="URL Gambar Satwa"
                value={newSatwaInvasif.gambar}
                onChange={(e) => setNewSatwaInvasif({ ...newSatwaInvasif, gambar: e.target.value })}
                className="mb-2 p-2 border"
            />
            <button onClick={tambahSatwaInvasif} className="bg-green-500 text-white py-2 px-4 rounded">Tambah Satwa Invasif</button>

            <h3 className="text-xl mt-4">Daftar Satwa Invasif</h3>
            <ul>
                {satwaInvasif.map(satwa => (
                    <li key={satwa.id} className="flex justify-between mb-2">
                        <div>
                            <strong>{satwa.nama}</strong>
                            <p>{satwa.deskripsi}</p>
                        </div>
                        <img src={satwa.gambar} alt={satwa.nama} className="w-20 h-20 object-cover" />
                        <button
                            onClick={() => hapusSatwaInvasif(satwa.id)}
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
