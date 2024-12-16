import React, { useState } from 'react';
import Headernavbar from '../Component/Headernavbar';
import Footer from '../Component/Footer';

const BunglonTaman = () => {
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (comment) {
            setComments([...comments, comment]);
            setComment('');
        }
    };

    return (
        <div>
            <Headernavbar />
            <main className="container mx-auto mt-4 px-4">
                <button className="bg-purple-500 text-white px-4 py-2 rounded mb-4">Kembali</button>
                <div className="flex">
                    <div className="w-2/3 bg-white p-4 rounded shadow">
                        <h1 className="text-2xl font-bold">Bunglon Taman</h1>
                        <h2 className="italic">(Calotes Versicolor)</h2>
                        <img 
                            src="src/assets/Calotes.jpg" 
                            alt="Bunglon Taman" 
                            className="mt-4 mb-4 w-full h-auto max-h-96 object-cover rounded" 
                        />
                        <button className="bg-green-500 text-white px-4 py-2 rounded">Aktivitas</button>
                        <div className="flex items-center mt-4">
                            <img src="https://placehold.co/50x50" alt="User avatar" className="h-10 w-10 rounded-full mr-2" />
                            <form onSubmit={handleCommentSubmit} className="flex-1">
                                <input
                                    type="text"
                                    placeholder="Tambahkan Komentar..."
                                    className="border-b-2 border-gray-300 py-2 flex-1"
                                    value={comment}
                                    onChange={handleCommentChange}
                                />
                            </form>
                        </div>
                        <div className="mt-4">
                            <h3 className="font-bold">Komentar:</h3>
                            {comments.length > 0 ? (
                                <ul>
                                    {comments.map((c, index) => (
                                        <li key={index} className="border-b py-2">{c}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p>Tidak ada komentar.</p>
                            )}
                        </div>
                    </div>
                    <div className="w-1/3 ml-4">
                        <div className="bg-white p-4 rounded shadow">
                            <h2 className="text-xl font-bold text-blue-500">Deskripsi</h2>
                            <p className="mt-2 text-justify">
                                Bunglon taman (Calotes versicolor) adalah spesies reptil dari keluarga Agamidae, bukan asli Indonesia, melainkan berasal dari Asia dengan penyebaran hingga Thailand. Spesies ini lebih besar dari bunglon surai asli Jawa (Bronchocela jubata) dan kini mendominasi pohon-pohon di Jawa, menggantikan populasi lokal. Bunglon taman diperkirakan terlepas sebagai binatang peliharaan.
                            </p>
                            <p className="mt-2 text-justify">
                                Selama musim kawin, tenggorokan jantan berubah merah cerah untuk menarik betina. Bunglon betina bertelur 10-20 butir, yang menetas setelah 6-7 minggu. Mereka adalah pemakan serangga dan menelan mangsa utuh.
                            </p>
                            <p className="mt-2 text-justify">
                                Bunglon ini dapat beradaptasi dengan lingkungan keras, seperti di Jakarta, di mana mereka tinggal di semak-semak dekat sungai. Secara fisik, mereka menyerupai iguana, berwarna coklat gelap, dan mampu berubah warna meskipun jarang. Mereka juga mengubur telur di tanah untuk melindungi dari predator.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default BunglonTaman;
