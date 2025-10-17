import React, { useContext } from "react";
import  AppContext  from '../context/AppContext.js';
import { useTranslation } from "react-i18next";

function Header() {
  const { theme, toggleTheme } = useContext(AppContext);
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'bn' : 'en');
  };

  return (
    <header className="flex flex-col md:flex-row justify-between items-center p-4 border-b">
      <h1 className="text-2xl font-bold">{t('greeting')}</h1>

      <div className="flex gap-2 mt-2 md:mt-0">
        <button 
          onClick={toggleTheme} 
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded transition"
        >
          {t('toggleTheme')}
        </button>

        <button 
          onClick={toggleLanguage} 
          className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded transition"
        >
          {i18n.language === 'en' ? 'বাংলা' : 'English'}
        </button>
      </div>
    </header>
  );
}

export default Header;
