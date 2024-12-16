import React, { useState } from 'react';
import Headernavbar from '../Component/Headernavbar';
import Footer from '../Component/Footer';

const animalsData = [
    { name: "Orang Utan Kalimantan", species: "(Pongo Pygmaeus)", image: "src/assets/Orangutan.jpg", date: "2024-10-31", comments: [] },
    { name: "Harimau Sumatra", species: "(Panthera tigris sondaica)", image: "src/assets/Harimau.jpg", date: "2024-10-30", comments: [] },
    { name: "Badak Jawa", species: "(Rhinoceros sondaicus)", image: "src/assets/Badak.jpg", date: "2024-10-29", comments: [] },
    { name: "Biawak Komodo", species: "(Varanus Komodoensis)", image: "src/assets/komodo.jpg", date: "2024-10-28", comments: [] }
];

export default function Jelajah() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedAnimal, setSelectedAnimal] = useState(null);
    const [newComment, setNewComment] = useState('');
    
    const filteredAnimals = animalsData.filter(animal => 
        animal.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleAnimalClick = (animal) => {
        setSelectedAnimal(animal);
    };

    const closeModal = () => {
        setSelectedAnimal(null);
    };

    const handleAddComment = () => {
        if (newComment.trim() !== '') {
            const updatedAnimal = { ...selectedAnimal, comments: [...selectedAnimal.comments, newComment] };
            setSelectedAnimal(updatedAnimal);
            setNewComment('');
        }
    };

    return (
        <div>
            <Headernavbar />
            <section className="relative">
                <img src="src/assets/Tiger.png" alt="Tigers in the forest" className="w-full h-96 object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 text-3xl font-bold">
                    JELAJAH
                </div>
            </section>
            <section className="bg-[#5A2A0C] text-white text-center p-4">
                <p className="text-xl md:text-2xl lg:text-2xl">
                    Terhubung dengan Alam. Jelajahi dan bagikan pengamatan Anda dari alam.
                </p>
            </section>
            <section className="bg-gray-100 p-8 text-center">
                <div className="flex justify-end mb-9">
                    <input 
                        type="text" 
                        placeholder="Cari" 
                        className="p-2 border border-gray-300 rounded-l" 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button className="bg-green-500 text-white p-2 rounded-r">Cari</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {filteredAnimals.map((animal, index) => (
                        <div key={index} className="bg-white shadow-md rounded overflow-hidden cursor-pointer" onClick={() => handleAnimalClick(animal)}>
                            <img src={animal.image} alt={animal.name} className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105" />
                            <div className="p-4">
                                <h3 className="text-lg md:text-xl font-bold">{animal.name}</h3>
                                <p className="text-gray-500">{animal.species}</p>
                                <div className="flex items-center text-gray-500 text-sm mt-2">
                                    <span>{animal.date}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-between mt-8">
                    <button className="p-2 bg-gray-200 rounded-full"><i className="fas fa-chevron-left"></i></button>
                    <button className="p-2 bg-gray-200 rounded-full"><i className="fas fa-chevron-right"></i></button>
                </div>
            </section>

            {selectedAnimal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-4 rounded-lg w-11/12 md:w-1/3">
                        <h2 className="text-xl font-bold">{selectedAnimal.name}</h2>
                        <img src={selectedAnimal.image} alt={selectedAnimal.name} className="w-full h-48 object-cover" />
                        <p className="text-gray-600">{selectedAnimal.species}</p>
                        <p className="text-gray-500">{selectedAnimal.date}</p>

                        {/* Komentar */}
                        <div className="mt-4">
                            <h3 className="font-bold">Komentar:</h3>
                            <div className="max-h-40 overflow-y-auto mb-2">
                                {selectedAnimal.comments.map((comment, index) => (
                                    <div key={index} className="bg-gray-200 p-2 rounded mt-1">{comment}</div>
                                ))}
                            </div>
                            <input 
                                type="text" 
                                placeholder="Tulis komentar..." 
                                className="p-2 border border-gray-300 rounded" 
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                            />
                            <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2" onClick={handleAddComment}>Kirim</button>
                        </div>

                        <button className="bg-red-500 text-white px-4 py-2 rounded mt-4" onClick={closeModal}>Tutup</button>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
}
