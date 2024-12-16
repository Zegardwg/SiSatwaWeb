import React, { useState } from 'react';

export default function Adminmanagement() {
    const [admins, setAdmins] = useState([]);
    const [newAdmin, setNewAdmin] = useState({ id: '', nama: '', email: '' });
    const [error, setError] = useState('');

    // Menambah admin
    const tambahAdmin = () => {
        // Validasi input
        if (!newAdmin.id || !newAdmin.nama || !newAdmin.email) {
            setError('Semua field harus diisi!');
            return;
        }

        // Validasi ID admin tidak boleh duplikat
        if (admins.some(admin => admin.id === newAdmin.id)) {
            setError('ID Admin sudah ada!');
            return;
        }

        // Menambahkan admin baru ke daftar
        setAdmins([...admins, newAdmin]);
        setNewAdmin({ id: '', nama: '', email: '' }); // Reset form setelah ditambah
        setError(''); // Reset error
    };

    // Menghapus admin
    const hapusAdmin = (id) => {
        // Menghapus admin berdasarkan ID
        setAdmins(admins.filter(admin => admin.id !== id));
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl mb-4">Manajemen Admin</h2>
            {error && <div className="text-red-500 mb-4">{error}</div>} {/* Menampilkan pesan error jika ada */}
            
            {/* Form untuk menambah admin */}
            <input
                type="text"
                placeholder="ID Admin"
                value={newAdmin.id}
                onChange={(e) => setNewAdmin({ ...newAdmin, id: e.target.value })}
                className="mb-2 p-2 border"
            />
            <input
                type="text"
                placeholder="Nama Admin"
                value={newAdmin.nama}
                onChange={(e) => setNewAdmin({ ...newAdmin, nama: e.target.value })}
                className="mb-2 p-2 border"
            />
            <input
                type="email"
                placeholder="Email Admin"
                value={newAdmin.email}
                onChange={(e) => setNewAdmin({ ...newAdmin, email: e.target.value })}
                className="mb-2 p-2 border"
            />
            <button onClick={tambahAdmin} className="bg-green-500 text-white py-2 px-4 rounded">Tambah Admin</button>

            <h3 className="text-xl mt-4">Daftar Admin</h3>
            <ul>
                {/* Menampilkan daftar admin yang sudah ada */}
                {admins.map(admin => (
                    <li key={admin.id} className="flex justify-between mb-2">
                        {admin.id} - {admin.nama} - {admin.email}
                        <button
                            onClick={() => hapusAdmin(admin.id)}
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
