import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';


import Register from './Pages/Register'; 
import Login from './Pages/Login'; 
import Loginadmin from './Pages2/Loginadmin'; 
import Dashboardadmin from './Pages2/Dashboardadmin';
import Usermanagementdadmin from './Pages2/Usermanagementadmin';
import Report from './Pages2/Report';
import Indexadmin from './Pages2/Indexadmin';
import Admin from './Pages2/Admin';
import Header from './Component/Header'; 
import Headernavbar from './Component/Headernavbar'; 
import Landing from './Pages/Landing';
import Dashboard from './Pages/Dashboard';
import Footer from './Component/Footer';
import Pelaporan from './Pages/Pelaporan';
import Verifikasi from './Pages/Verifikasi';
import SatwaEndemik from './Pages/SatwaEndemik';
import SatwaInvasif from './Pages/SatwaInvasif';
import Jelajah from './Pages/Jelajah';
import BadakJawa from './Pages/BadakJawa';
import BunglonTaman from './Pages/BunglonTaman';
import Maps from './Pages/Maps';
import SuperAdmin from './Pages3/SuperAdmin';
import Loginsuperadmin from './Pages3/Loginsuperadmin';
import Dashboardsuperadmin from './Pages3/Dashboardsuperadmin';
import Usermanagementsuperadmin from './Pages3/Usermanagementsuperadmin';
import Adminmanagement from './Pages3/Adminmanagement';
import Satwaendemiksuperadmin from './Pages3/Satwaendemiksuperadmin';
import Satwainvasifsuperadmin from './Pages3/Satwainvasifsuperadmin';
import Berita from './Pages3/Berita';
import Indexsuperadmin from './Pages3/Indexsuperadmin';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Loginadmin" element={<Loginadmin />} />
        <Route path="/Header" element={<Header />} />
        <Route path="/Headernavbar" element={<Headernavbar />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/" element={<Landing />} />
        <Route path="/Footer" element={<Footer />} />
        <Route path= "/Admin" element={<Admin />} />
        <Route path="/Dashboardadmin" element={<Dashboardadmin />} />
        <Route path="/Usermanagementadmin" element={<Usermanagementdadmin />} />
        <Route path="/Report" element={<Report />} />
        <Route path="/Indexadmin" element={<Indexadmin />} />
        <Route path="/Pelaporan" element={<Pelaporan />} />
        <Route path="/Verifikasi" element={<Verifikasi />} />
        <Route path="/SatwaEndemik" element={<SatwaEndemik />} />
        <Route path="/SatwaInvasif" element={<SatwaInvasif />} />
        <Route path="/Jelajah" element={<Jelajah />} />
        <Route path="/BadakJawa" element={<BadakJawa />} />
        <Route path="/BunglonTaman" element={<BunglonTaman />} />
        <Route path="/Maps" element={<Maps />} />
        <Route path="/SuperAdmin" element={<SuperAdmin />} />
        <Route path="/Loginsuperadmin" element={<Loginsuperadmin />} />
        <Route path="/Dashboardsuperadmin" element={<Dashboardsuperadmin />} />
        <Route path="/Usermanagementsuperadmin" element={<Usermanagementsuperadmin />} />
        <Route path="/Adminmanagement" element={<Adminmanagement />} />
        <Route path="/Satwaendemiksuperadmin" element={<Satwaendemiksuperadmin />} />
        <Route path="/Satwainvasifsuperadmin" element={<Satwainvasifsuperadmin />} />
        <Route path="/Berita" element={<Berita />} />
        <Route path="/Indexsuperadmin" element={<Indexsuperadmin />} />
        
        
      </Routes>
    </Router>
  );
}
