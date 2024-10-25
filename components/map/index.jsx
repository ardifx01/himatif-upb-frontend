import React, { useRef, useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";

import L from "leaflet";

// import styles from "./map.module.css";

import { MaptilerLayer } from "@maptiler/leaflet-maptilersdk";

const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [zoom] = useState(14);

  useEffect(() => {
    if (map.current) return; // stops map from intializing more than once

    // Tentukan titik fokus pertama dan kedua
    const point1 = L.latLng(-6.323376250282484, 107.169681599731); // Titik fokus pertama
    const point2 = L.latLng(-6.333607799975671, 107.17999079804403); // Titik fokus kedua dengan lokasi yang berbeda

    // Hitung titik tengah antara dua titik fokus
    const center = L.latLngBounds(point1, point2).getCenter();

    map.current = new L.Map(mapContainer.current, {
      center: center,
      zoom: zoom,
    });

    // Create a MapTiler Layer inside Leaflet
    const mtLayer = new MaptilerLayer({
      // Get your free API key at https://cloud.maptiler.com
      apiKey: "HhW2HQTJh9oviG8PuH7h",
    }).addTo(map.current);

    // Tambahkan 2 titik point pada peta dengan lokasi yang berbeda dan icon yang berbeda
    const icon1 = L.icon({
      iconUrl: "https://unpkg.com/leaflet@1.8.0/dist/images/marker-icon-2x.png", // Ubah path menjadi direktori public
      iconSize: [25, 41],
      iconAnchor: [12, 41],
    });
    const marker1 = L.marker(point1, { icon: icon1 }).addTo(map.current);
    marker1.bindPopup(
      "<div style='background-color: white; padding: 10px; border-radius: 5px;'><strong>Universitas Pelita Bangsa</strong><br>Jl. Inspeksi Kalimalang No.9, Cibatu, Cikarang Sel., Kabupaten Bekasi, Jawa Barat 17530<br><a href='https://maps.app.goo.gl/qSGvRTVoj13rhsNP8' target='_blank'>Google Maps</a></div>"
    );

    const icon2 = L.icon({
      iconUrl: "https://unpkg.com/leaflet@1.8.0/dist/images/marker-icon-2x.png", // Ubah path menjadi direktori public
      iconSize: [25, 41],
      iconAnchor: [12, 41],
    });
    const marker2 = L.marker(point2, { icon: icon2 }).addTo(map.current);
    marker2.bindPopup(
      "<div style='background-color: white; padding: 10px; border-radius: 5px;'><strong>Sekretariat Himatif UPB </strong><br>M58H+FX7, Jl. Kp. Tegal Danas, RT.003/RW.001, Jayamukti, Kec. Cikarang Pusat, Kabupaten Bekasi, Jawa Barat 17530<br><a href='https://maps.app.goo.gl/PRFD63t88UfxEH8X7' target='_blank'>Google Maps</a></div>"
    );
  }, [zoom]);

  return (
    <div className="w-full z-0">
      <div ref={mapContainer} className="w-full h-3/5" />
    </div>
  );
};

export default Map;
