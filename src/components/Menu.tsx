import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import translations from '../locales/translations';

interface MenuItem {
  name: string;
  description: string;
  image: string;
}

const MenuItem: React.FC<MenuItem> = ({ name, description, image }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src={image} alt={name} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="font-bold text-lg mb-2">{name}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const Menu: React.FC = () => {
  const { language } = useLanguage();
  const menuItems: MenuItem[] = [
    {
      name: translations[language].porkLegRice,
      description: translations[language].porkLegRiceDesc,
      image: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      name: translations[language].shrimpFriedRice,
      description: translations[language].shrimpFriedRiceDesc,
      image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      name: translations[language].thaiIceCream,
      description: translations[language].thaiIceCreamDesc,
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <section id="menu" className="my-12">
      <h2 className="text-3xl font-bold mb-6 text-amber-800">{translations[language].recommendedMenu}</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {menuItems.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Menu;