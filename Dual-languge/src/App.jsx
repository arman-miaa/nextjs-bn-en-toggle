import React, { useState, useEffect } from "react";
import AppContext  from './context/AppContext.js';
import Header from './components/Header.jsx';
import Home from "./components/Home.jsx";
import './i18n.js';

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  useEffect(() => {
    document.body.className = theme === "light" ? "bg-white" : "bg-black";
  }, [theme]);

  return (
    <AppContext.Provider value={{ theme, toggleTheme }}>
      <div className={`${theme === 'light' ? 'text-black' : 'text-white'} min-h-screen flex flex-col`}>
        <Header />
        <Home />
      </div>
    </AppContext.Provider>
  );
}

export default App;
