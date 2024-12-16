import Footer from "../Component/Footer";
import Headernavbar from "../Component/Headernavbar";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Contoh posisi koordinat
const position = [51.505, -0.09];

function Maps() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="z-40 sticky">
        <Headernavbar />
      </div>

      <div className="flex-grow mt-12 -z-40 px-4 md:px-8">
        <h1 className="text-center text-2xl md:text-3xl font-bold mb-4">
          Peta Distribusi Satwa dengan React Leaflet
        </h1>

        {/* Peta menggunakan MapContainer dari React Leaflet */}
        <MapContainer
          center={position}
          zoom={13}
          className="w-full"
          style={{
            height: "50vh", // Tinggi peta akan 50% dari viewport pada perangkat kecil
            minHeight: "300px", // Minimal tinggi peta untuk perangkat terkecil
          }}
        >
          {/* Lapisan peta menggunakan OpenStreetMap */}
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />

          {/* Marker dan Popup pada peta */}
          <Marker position={position}>
            <Popup>Ini adalah popup di lokasi marker.</Popup>
          </Marker>
        </MapContainer>
      </div>

      <div className="mt-8">
        <Footer />
      </div>
    </div>
  );
}

export default Maps;
