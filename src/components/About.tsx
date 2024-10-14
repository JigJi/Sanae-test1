import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import translations from '../locales/translations';

const About: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section id="about" className="my-12">
      <h2 className="text-3xl font-bold mb-6 text-amber-800">{translations[language].about}</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <img src="https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Restaurant interior" className="w-full h-64 object-cover rounded-lg shadow-md" />
        </div>
        <div className="space-y-4">
          <p className="text-gray-700">
            {translations[language].aboutContent}
          </p>
          <p className="text-gray-700">
            {translations[language].restaurantStyle}
          </p>
          <p className="text-gray-700">
            {translations[language].awards}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;