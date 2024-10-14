import React from 'react';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useLanguage } from '../contexts/LanguageContext';
import translations from '../locales/translations';

// Fix for default marker icon
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png',
});

const Contact: React.FC = () => {
  const { language } = useLanguage();
  const position: [number, number] = [18.80569924523381, 99.00310961279085];

  return (
    <section id="contact" className="my-12">
      <h2 className="text-3xl font-bold mb-6 text-amber-800">{translations[language].contactUs}</h2>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <div className="flex items-center mb-4">
              <Phone className="mr-2 text-amber-700" />
              <span>094 824 8866</span>
            </div>
            <div className="flex items-center mb-4">
              <Mail className="mr-2 text-amber-700" />
              <span>info@sanaethai.com</span>
            </div>
            <div className="flex items-center mb-4">
              <Clock className="mr-2 text-amber-700" />
              <span>{translations[language].openingHours}</span>
            </div>
            <div className="flex items-start">
              <MapPin className="mr-2 text-amber-700 mt-1 flex-shrink-0" />
              <span>{translations[language].address}</span>
            </div>
          </div>
          <div className="h-64">
            <MapContainer center={position} zoom={15} style={{ height: '100%', width: '100%' }}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={position}>
                <Popup>
                  Sanae Thai Cuisine
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;