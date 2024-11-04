import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './illinoismap.css';
import illinoisGeoJSON from './data/illinois-counties.json';

const IllinoisMap = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) {
      const map = L.map('illinois-map');
      mapRef.current = map;

      // Set initial view centered on Northfield
      map.setView([42.1, -87.775], 8);

      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19
      }).addTo(map);

      const regionStyle = {
        fillColor: '#ACD8A7',
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
      };

      const highlightedStyle = {
        fillColor: '#FFD700', // Gold color for highlighted regions
        weight: 2,
        color: 'red',
        dashArray: '3',
        fillOpacity: 0.8
      };

      const highlightRegions = ["Winnetka", "Wilmette", "Skokie", "Niles", "Northbrook", "Glenview"];

      if (illinoisGeoJSON) {
        L.geoJSON(illinoisGeoJSON, {
          style: (feature) =>
            highlightRegions.includes(feature.properties.NAME) ? highlightedStyle : regionStyle,
          onEachFeature: (feature, layer) => {
            const regionName = feature.properties.name || "Unknown";
            // Bind tooltip for each county, styled as bolded black text
            layer.bindTooltip(
              `<span class="county-label">${regionName}</span>`,
              {
                permanent: true,
                direction: 'center',
                className: 'county-tooltip'
              }
            );

            layer.on({
              click: () => alert(`You clicked on ${regionName}`)
            });
          }
        }).addTo(map);
      }
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return <div id="illinois-map" style={{ width: '60%', height: '800px', margin: '0 auto' }}></div>;
};

export default IllinoisMap;
