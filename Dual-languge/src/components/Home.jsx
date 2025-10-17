import React, { useContext } from "react";
import  AppContext  from '../context/AppContext.js';
import { useTranslation } from "react-i18next";

function Home() {
  const { theme } = useContext(AppContext);
  const { t } = useTranslation();

  return (
    <main className="p-6 flex flex-col items-center justify-center text-center">
      <p className="text-lg">
        {t('greeting')}, this is a small i18n + theme demo.
      </p>
      <p className="mt-4">
        Current Theme: <span className="font-bold">{theme}</span>
      </p>
    </main>
  );
}

export default Home;
