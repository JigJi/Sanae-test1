import React, { useState } from 'react';
import { UtensilsCrossed, ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import translations from '../locales/translations';
import FlagIcon from './FlagIcon';

const Header: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLanguageChange = (lang: 'th' | 'en' | 'zh') => {
    setLanguage(lang);
    setIsDropdownOpen(false);
  };

  const getCountryCode = (lang: string) => {
    switch (lang) {
      case 'en': return 'gb';
      case 'zh': return 'cn';
      default: return lang;
    }
  };

  return (
    <header className="bg-amber-700 text-white relative z-50">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <UtensilsCrossed className="mr-2" />
          <h1 className="text-2xl font-bold">Sanae Thai Cuisine</h1>
        </div>
        <nav className="flex items-center">
          <ul className="flex space-x-4 mr-4">
            <li><a href="#about" className="hover:text-amber-200">{translations[language].about}</a></li>
            <li><a href="#menu" className="hover:text-amber-200">{translations[language].menu}</a></li>
            <li><a href="#contact" className="hover:text-amber-200">{translations[language].contact}</a></li>
          </ul>
          <div className="relative">
            <button 
              className="flex items-center hover:text-amber-200"
              onClick={toggleDropdown}
            >
              <FlagIcon country={getCountryCode(language)} />
              <ChevronDown className="ml-1" size={16} />
            </button>
            {isDropdownOpen && (
              <ul className="absolute right-0 mt-2 w-28 bg-white rounded-md shadow-lg z-50">
                <li>
                  <button onClick={() => handleLanguageChange('th')} className="flex items-center px-4 py-2 hover:bg-amber-100 w-full">
                    <FlagIcon country="th" />
                    <span className="ml-2 text-amber-800">ไทย</span>
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLanguageChange('en')} className="flex items-center px-4 py-2 hover:bg-amber-100 w-full">
                    <FlagIcon country="gb" />
                    <span className="ml-2 text-amber-800">English</span>
                  </button>
                </li>
                <li>
                  <button onClick={() => handleLanguageChange('zh')} className="flex items-center px-4 py-2 hover:bg-amber-100 w-full">
                    <FlagIcon country="cn" />
                    <span className="ml-2 text-amber-800">中文</span>
                  </button>
                </li>
              </ul>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;