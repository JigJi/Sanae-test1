import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import translations from '../locales/translations';

const Hero: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="relative h-[50vh] md:h-[60vh] lg:h-[70vh]">
      <img
        src="https://images.unsplash.com/photo-1559314809-0d155014e29e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
        alt="Thai cuisine"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Sanae Thai Cuisine</h2>
          <p className="text-xl md:text-2xl text-amber-200">{translations[language].thaiCuisineSlogan}</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;