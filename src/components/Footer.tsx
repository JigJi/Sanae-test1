import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import translations from '../locales/translations';

const Footer: React.FC = () => {
  const { language } = useLanguage();

  return (
    <footer className="bg-amber-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2024 Sanae Thai Cuisine. {translations[language].allRightsReserved}.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-amber-200"><Facebook /></a>
            <a href="#" className="hover:text-amber-200"><Instagram /></a>
            <a href="#" className="hover:text-amber-200"><Twitter /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;