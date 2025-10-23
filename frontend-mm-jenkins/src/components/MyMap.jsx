// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import L from "leaflet";
// import "leaflet/dist/leaflet.css";

import { Heading } from "lucide-react";

// const clients = [
//   { name: "USA Client", lat: 37.0902, lng: -95.7129, country: "United States" },
//   { name: "UK Client", lat: 55.3781, lng: -3.4360, country: "United Kingdom" },
//   { name: "India Client", lat: 20.5937, lng: 78.9629, country: "India" },
//   { name: "Japan Client", lat: 36.2048, lng: 138.2529, country: "Japan" },
// ];

// const customIcon = new L.Icon({
//   iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png", // modern red pin icon
//   iconSize: [30, 30],
//   iconAnchor: [15, 30],
// });

// export default function MyMap() {
//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         background: "linear-gradient(135deg, #f9fafb 0%, #e9eff5 100%)",
//         height: "100vh",
//         padding: "20px",
//         // 👇 Add these two lines
//         position: "relative", // Creates a stacking context
//         zIndex: 1,            // Puts this whole component below the navbar's z-index of 50
//       }}
//     >
//       <div
//         style={{
//           width: "90%",
//           maxWidth: "1000px",
//           height: "550px",
//           borderRadius: "20px",
//           overflow: "hidden",
//           boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
//           background: "#fff",
//           border: "1px solid #e5e7eb",
//         }}
//       >
//         <MapContainer
//           center={[20, 0]}
//           zoom={2}
//           style={{ height: "100%", width: "100%" }}
//           zoomControl={true}
//         >
//           <TileLayer
//             attribution='&copy; <a href="https://carto.com/">CARTO</a>'
//             url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
//           />

//           {clients.map((client, index) => (
//             <Marker
//               key={index}
//               position={[client.lat, client.lng]}
//               icon={customIcon}
//             >
//               <Popup>
//                 <strong>{client.name}</strong>
//                 <br />
//                 {client.country}
//               </Popup>
//             </Marker>
//           ))}
//         </MapContainer>
//       </div>
//     </div>
//   );
// }

//with Heading
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const clients = [
  { name: "USA Client", lat: 37.0902, lng: -95.7129, country: "United States" },
  { name: "UK Client", lat: 55.3781, lng: -3.436, country: "United Kingdom" },
  { name: "India Client", lat: 20.5937, lng: 78.9629, country: "India" },
  { name: "Japan Client", lat: 36.2048, lng: 138.2529, country: "Japan" },
];

const customIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png", // modern red pin icon
  iconSize: [30, 30],
  iconAnchor: [15, 30],
});

export default function MyMap() {
  return (
    <section
      id="clients"
      className="bg-white py-20"
      style={{
        position: "relative",
        zIndex: 1, // keeps it under navbars with higher z-index
      }}
    >
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="max-w-6xl mx-auto">
          {/* 🔹 Heading Section */}
          <div className="flex flex-col items-center text-center mb-10">
            

            <h2 className="text-5xl font-display font-bold mb-4 text-gray-900">
              Global Clients We’ve Partnered With
            </h2>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our clients span across continents — a reflection of trust, collaboration, 
              and world-class delivery excellence.
            </p>
          </div>

          {/* 🔹 Map Section */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background:
                "linear-gradient(135deg, #f9fafb 0%, #e9eff5 100%)",
              height: "auto",
              padding: "20px",
            }}
          >
            <div
              style={{
                width: "100%",
                maxWidth: "1000px",
                height: "550px",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
                background: "#fff",
                border: "1px solid #e5e7eb",
              }}
            >
              <MapContainer
                center={[20, 0]}
                zoom={2}
                style={{ height: "100%", width: "100%" }}
                zoomControl={true}
              >
                <TileLayer
                  attribution='&copy; <a href="https://carto.com/">CARTO</a>'
                  url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                />

                {clients.map((client, index) => (
                  <Marker
                    key={index}
                    position={[client.lat, client.lng]}
                    icon={customIcon}
                  >
                    <Popup>
                      <strong>{client.name}</strong>
                      <br />
                      {client.country}
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
