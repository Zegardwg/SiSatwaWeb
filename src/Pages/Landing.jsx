import React from 'react';
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Landing() {
    return (
        <div className="bg-gray-200 min-h-screen flex flex-col">
            <Header />
            <main className="max-w-4xl mx-auto flex flex-col md:flex-row flex-grow p-6">
                <div className="w-full md:w-2/3 pr-0 md:pr-6 mt-6 flex flex-col justify-start">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4 mt-24">Lestarikan Alam, Lindungi Satwa Indonesia</h1>
                    <p className="text-lg md:text-xl mb-6">
                        Bersama, kita bisa menjaga kelestarian satwa liar Indonesia dari ancaman kepunahan, melawan perdagangan satwa ilegal, dan menghentikan perburuan liar. Kita bisa menjadi suara bagi satwa-satwa yang tak mampu berbicara untuk diri mereka sendiri, mewujudkan masa depan yang lebih aman bagi satwa dan ekosistem Indonesia.
                    </p>
                </div>
                <div className="w-full md:w-1/3 mt-6 mb-6">
                    <div className="bg-white p-4 shadow-lg rounded-lg">
                        <img src="assets/Pelaporan.png" alt="Gambar satwa liar" className="w-full mb-4 rounded-md object-cover h-48 md:h-auto" />
                        <h2 className="text-2xl font-bold mb-2">Pelaporan</h2>
                        <p className="text-sm mb-4">
                            Lindungi satwa Indonesia! Laporkan perdagangan ilegal melalui platform ini untuk informasi cepat ke BKSDA, demi kelestarian satwa dan ekosistem kita.
                        </p>
                        <a href="/Pelaporan">
                            <button className="bg-blue-600 text-white px-4 py-2 rounded transition-transform transform hover:scale-105 hover:bg-blue-700">
                                LAPORKAN
                            </button>
                        </a>
                    </div>
                </div>
            </main>

            <section className="relative mb-8">
                <img src="assets/Tiger.png" alt="Tiger in the forest" className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg" />
                <div className="absolute bottom-4 left-4 p-2 rounded-lg" style={{ backgroundColor: "#5A2A0C" }}>
                    <div className="bg-opacity-75 text-white p-4 rounded-lg shadow-lg">
                        <h2 className="text-xl md:text-2xl font-bold mb-2">What's News</h2>
                        <p className="text-sm mb-2">
                            Ikuti perkembangan terbaru seputar pelestarian satwa, upaya melawan perdagangan ilegal, dan kondisi satwa endemik di Indonesia. Dapatkan informasi penting dan terpercaya untuk terus mendukung aksi konservasi dan menjaga keseimbangan ekosistem kita.
                        </p>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded transition-transform transform hover:scale-105 hover:bg-blue-700">
                            MORE
                        </button>
                    </div>
                </div>
            </section>

            <section className="bg-gray-200 p-6 rounded-lg shadow-lg mb-8">
                <h2 className="text-2xl font-bold mb-4 text-center">Pelajari Tentang Satwa Endemik dan Satwa Invasif</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center items-center">
                    <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center">
                        <img src="assets/Endemik.webp" alt="Satwa Endemik Indonesia" className="w-full h-[300px] object-cover rounded-lg mb-4" />
                        <h3 className="text-xl font-bold mb-2 text-center">Satwa Endemik Indonesia</h3>
                        <p className="text-sm mb-2 text-center">
                            Kenali berbagai jenis satwa endemik Indonesia dan peran mereka dalam menjaga keseimbangan ekosistem.
                        </p>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded transition-transform transform hover:scale-105 hover:bg-blue-700">
                            MORE
                        </button>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center">
                        <img src="assets/Invasif.webp" alt="Satwa Invasif" className="w-full h-[300px] object-cover rounded-lg mb-4" />
                        <h3 className="text-xl font-bold mb-2 text-center">Satwa Invasif</h3>
                        <p className="text-sm mb-2 text-center">
                            Pelajari tentang spesies invasif yang mengancam ekosistem lokal dan bagaimana kita bisa membantu.
                        </p>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded transition-transform transform hover:scale-105 hover:bg-blue-700">
                            MORE
                        </button>
                    </div>
                </div>
            </section>

            <section className="relative mb-8">
                <img src="assets/BG3.jpg" alt="Forest exploration" className="w-full h-64 object-cover rounded-lg shadow-lg" />
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                    <h2 className="bg-black bg-opacity-50 text-white p-4 rounded-lg shadow-lg text-center flex-grow">
                        <span className="text-3xl font-bold">JELAJAH</span>
                    </h2>
                </div>
                <div className="absolute top-32 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
                    <button className="bg-blue-600 text-white p-3 rounded-lg shadow-lg flex items-center transition-transform transform hover:scale-105 hover:bg-blue-700">
                        <i className="fas fa-camera text-3xl"></i>
                    </button>
                    <button className="bg-blue-600 text-white p-3 rounded-lg shadow-lg flex items-center transition-transform transform hover:scale-105 hover:bg-blue-700">
                        <i className="fas fa-search text-3xl"></i>
                    </button>
                </div>
            </section>

            <section className="bg-[#5A2A0C] p-6 rounded-lg shadow-lg mb-8">
                <p className="bg-[#5A2A0C] bg-opacity-75 text-white p-4 rounded-lg shadow-lg text-center">
                    Jelajah adalah fitur yang memungkinkan pengguna merasakan pengalaman eksplorasi virtual ke berbagai habitat alami Indonesia. Nikmati keindahan alam dan kehidupan satwa liar sambil memahami keanekaragaman hayati Indonesia. Melalui gambar dan informasi yang disajikan, pengguna dapat menjelajahi hutan, pantai, dan ekosistem lainnya, seolah-olah mereka berada di lokasi tersebut. Fitur ini mendorong kita untuk mengabadikan momen indah dan mendukung upaya pelestarian.
                </p>
            </section>


            <section className="bg-gray-200 p-6 rounded-lg shadow-lg mb-8">
                <p className="text-center text-lg">
                    SiSatwa berkomitmen untuk melindungi satwa liar Indonesia melalui edukasi, pelaporan, dan aksi konservasi. Bersama, kita dapat menjaga keberagaman satwa endemik dan melawan perdagangan ilegal. Mari bergabung dalam upaya menciptakan masa depan yang lebih baik untuk satwa dan ekosistem kita.
                </p>
            </section>

            <Footer />
        </div>
    );
}
