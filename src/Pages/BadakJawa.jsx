import React, { useState } from 'react';
import Headernavbar from '../Component/Headernavbar';
import Footer from '../Component/Footer';
import { Link } from 'react-router-dom';

const BadakJawa = () => {
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
            <Headernavbar/>
            <main className="container mx-auto mt-4 px-4">
                <Link to="/SatwaEndemik">
                <button className="bg-purple-500 text-white px-4 py-2 rounded mb-4">Kembali</button>  
                </Link>
                <div className="flex">
                    <div className="w-2/3 bg-white p-4 rounded shadow">
                        <h1 className="text-2xl font-bold">Badak Jawa</h1>
                        <h2 className="italic">(Rhinoceros sondaicus)</h2>
                        <img 
                            src="src/assets/Badak.jpg" 
                            alt="Badak Jawa in its natural habitat" 
                            className="mt-4 mb-4 w-full h-auto max-h-96 object-cover rounded" 
                        />
                        <button className="bg-green-500 text-white px-4 py-2 rounded">Aktivitas</button>
                        <div className="flex items-center mt-4">
                            <img src="src/assets/Komodo2.png" alt="User avatar" className="h-10 w-10 rounded-full mr-2"/>
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
                                Badak Jawa (Rhinoceros sondaicus) adalah spesies badak yang terancam kritis dan merupakan salah satu dari lima spesies badak yang masih ada di Asia Selatan dan Afrika. Badak Jawa adalah salah satu yang terkecil, dengan panjang rata-rata 3.1–3.2 m dan tinggi 1.4–1.7 m. Spesies ini memiliki cula yang lebih pendek dibandingkan dengan badak hitam atau putih.
                            </p>
                            <p className="mt-2 text-justify">
                                Dahulu, badak Jawa menyebar hingga ke daratan Asia Tenggara dan Indochina, tetapi kini hanya tersisa satu populasi liar di Taman Nasional Ujung Kulon, Jawa, dengan sekitar 74 individu. Populasi badak Jawa menurun akibat perburuan liar untuk cula mereka yang dihargai tinggi dalam pengobatan tradisional, serta hilangnya habitat karena pertumbuhan populasi manusia.
                            </p>
                            <p className="mt-2 text-justify">
                                Badak Jawa dapat hidup 30–45 tahun di alam liar, biasanya soliter, kecuali saat kawin dan membesarkan anak. Mereka tidak memiliki predator alami dewasa, tetapi anak-anak muda rentan terhadap macan tutul dan harimau Sumatra. Penelitian terhadap spesies ini sulit dilakukan karena kelangkaannya yang ekstrem. Meskipun tantangan besar dihadapi, upaya konservasi tetap dilakukan, dan bukti terbaru menunjukkan bahwa badak Jawa masih berkembang biak di alam liar.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    );
};

export default BadakJawa;
