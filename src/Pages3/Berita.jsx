import React, { useState } from 'react';

export default function Berita() {
    const [berita, setBerita] = useState([]);
    const [newBerita, setNewBerita] = useState({ id: '', judul: '', konten: '' });
    const [error, setError] = useState('');

    // Menambah berita
    const tambahBerita = () => {
        if (!newBerita.id || !newBerita.judul || !newBerita.konten) {
            setError('Semua field harus diisi!');
            return;
        }

        // Cek apakah ID berita sudah ada
        if (berita.some(item => item.id === newBerita.id)) {
            setError('ID Berita sudah ada!');
            return;
        }

        setBerita([...berita, newBerita]);
        setNewBerita({ id: '', judul: '', konten: '' });
        setError('');
    };

    // Menghapus berita dengan konfirmasi
    const hapusBerita = (id) => {
        if (window.confirm('Apakah Anda yakin ingin menghapus berita ini?')) {
            setBerita(berita.filter(item => item.id !== id));
        }
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl mb-4">Berita</h2>
            {error && <div className="text-red-500 mb-4">{error}</div>}

            <input
                type="text"
                placeholder="ID Berita"
                value={newBerita.id}
                onChange={(e) => setNewBerita({ ...newBerita, id: e.target.value })}
                className="mb-2 p-2 border"
            />
            <input
                type="text"
                placeholder="Judul Berita"
                value={newBerita.judul}
                onChange={(e) => setNewBerita({ ...newBerita, judul: e.target.value })}
                className="mb-2 p-2 border"
            />
            <textarea
                placeholder="Konten Berita"
                value={newBerita.konten}
                onChange={(e) => setNewBerita({ ...newBerita, konten: e.target.value })}
                className="mb-2 p-2 border"
            />
            <button onClick={tambahBerita} className="bg-green-500 text-white py-2 px-4 rounded">Tambah Berita</button>

            <h3 className="text-xl mt-4">Daftar Berita</h3>
            <ul>
                {berita.map(item => (
                    <li key={item.id} className="flex justify-between mb-2">
                        <div>
                            <strong>{item.judul}</strong>
                            <p>{item.konten}</p>
                        </div>
                        <button
                            onClick={() => hapusBerita(item.id)}
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
