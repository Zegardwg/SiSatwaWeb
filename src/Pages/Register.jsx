import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 

export default function Register() {
  const [isSuccess, setIsSuccess] = useState(false); 

  const handleRegister = (e) => {
    e.preventDefault(); 
    
    setIsSuccess(true); 
  };

  return (
    <div className="flex items-center justify-center min-h-screen" style={{ backgroundImage: "url('src/assets/BGHutan.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="flex flex-col md:flex-row rounded-lg shadow-lg max-w-4xl w-full">
        <div className="md:w-1/2 p-8">
          <img src="src/assets/Komodo2.png" alt="Komodo Dragon" className="rounded-lg mt-10" /> 
        </div>
        <div className="md:w-1/2 p-8 bg-white border border-white rounded-lg">
          <div className="flex justify-center mb-4">
            <img src="src/assets/Logo.png" alt="Logo" className="rounded-full" />
          </div>
          <h2 className="text-2xl font-bold text-center mb-2">Daftar Sekarang</h2>
          <p className="text-center text-gray-600 mb-6">Mohon masukkan detail anda</p>
          <form onSubmit={handleRegister}>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input type="email" className="w-full px-3 py-2 border rounded-lg" required />
            </div>
            <div className="mb-4 relative">
              <label className="block text-gray-700">Password</label>
              <input type="password" className="w-full px-3 py-2 border rounded-lg" required />
            </div>
            <button type="submit" className="w-full bg-black text-white py-2 rounded-lg mb-4">BUAT AKUN</button>
            <button className="w-full flex items-center justify-center border py-2 rounded-lg mb-4">
              <img src="src/assets/Google.png" alt="Google Logo" className="mr-2" />
              Login with Google
            </button>
            <div className="text-center">
              <Link to="/Login" className="text-blue-500">Login</Link>
            </div>
          </form>
          {isSuccess && ( 
            <div className="mt-4 text-center text-green-500">
              Akun Anda berhasil dibuat! Silakan <Link to="/Login" className="text-blue-500">login</Link>.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
