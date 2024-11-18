import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AnimatePresence } from 'framer-motion';
import { useThemeStore } from './store/theme';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Software from './pages/Software';
import Consulting from './pages/Consulting';
import About from './pages/About';
import Contact from './pages/Contact';
import './i18n/config';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/software" element={<Software />} />
        <Route path="/consulting" element={<Consulting />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const { theme } = useThemeStore();
  const { t } = useTranslation();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Navbar />
        <main className="pt-16">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;