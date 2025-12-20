import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Bot, Sun, Moon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import type { Language } from '../utils/translations';

// Flag SVG Components
const UKFlag = () => (
  <svg className="w-4 h-3" viewBox="0 0 60 30" xmlns="http://www.w3.org/2000/svg">
    <clipPath id="s"><path d="M0,0 v30 h60 v-30 z" /></clipPath>
    <clipPath id="t"><path d="M30,15 h30 v15 z v-30 h-30 z h-30 v15 z v-30 h30 z" /></clipPath>
    <g clipPath="url(#s)">
      <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
      <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4" />
      <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
      <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
    </g>
  </svg>
);

const USFlag = () => (
  <svg className="w-4 h-3" viewBox="0 0 60 30" xmlns="http://www.w3.org/2000/svg">
    <rect width="60" height="30" fill="#B22234" />
    <path d="M0,3.46 h60 M0,6.92 h60 M0,10.38 h60 M0,13.84 h60 M0,17.3 h60 M0,20.76 h60 M0,24.22 h60 M0,27.68 h60" stroke="#fff" strokeWidth="3.46" />
    <rect width="24" height="17.3" fill="#3C3B6E" />
  </svg>
);

const SpainFlag = () => (
  <svg className="w-4 h-3" viewBox="0 0 60 30" xmlns="http://www.w3.org/2000/svg">
    <rect width="60" height="30" fill="#AA151B" />
    <rect y="7.5" width="60" height="15" fill="#F1BF00" />
  </svg>
);

const FranceFlag = () => (
  <svg className="w-4 h-3" viewBox="0 0 60 30" xmlns="http://www.w3.org/2000/svg">
    <rect width="20" height="30" fill="#002395" />
    <rect x="20" width="20" height="30" fill="#fff" />
    <rect x="40" width="20" height="30" fill="#ED2939" />
  </svg>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);// Default to dark mode
  const [scrolled, setScrolled] = useState(true);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > -10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#about', label: t.nav.about },
    { href: '#experience', label: t.nav.experience },
    { href: '#skills', label: t.nav.skills },
    { href: '#projects', label: t.nav.projects },
    { href: '#contact', label: t.nav.contact }
  ];

  const languages = [
    {
      code: 'EN' as Language,
      label: 'English',
      flags: [<UKFlag key="uk" />, <USFlag key="us" />]
    },
    {
      code: 'ES' as Language,
      label: 'Español',
      flags: [<SpainFlag key="es" />]
    },
    {
      code: 'FR' as Language,
      label: 'Français',
      flags: [<FranceFlag key="fr" />]
    }
  ];

  const handleLanguageSelect = (langCode: Language) => {
    if (langCode !== language) {
      setLanguage(langCode);
      setIsLangOpen(false);
    }
    // If the same language is clicked, keep the dropdown open
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <Bot className="h-8 w-8 text-cyan-400" />
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Portafolio Maselu
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                whileHover={{ scale: 1.1 }}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="p-2 rounded-full bg-slate-800 text-cyan-400 hover:bg-slate-700 transition-colors flex items-center space-x-1.5 min-w-[70px] justify-center"
              >
                <span className="text-sm font-semibold">{language}</span>
                <div className="flex items-center space-x-0.5">
                  {languages.find(lang => lang.code === language)?.flags}
                </div>
              </motion.button>

              {/* Language Dropdown */}
              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full mt-2 right-0 bg-slate-900 rounded-lg shadow-lg border border-cyan-400/20 overflow-hidden z-[60] min-w-[140px]"
                  >
                    {languages.map((lang) => (
                      <motion.button
                        key={lang.code}
                        whileHover={{ backgroundColor: 'rgba(34, 211, 238, 0.1)' }}
                        onClick={() => handleLanguageSelect(lang.code)}
                        className={`w-full px-4 py-2.5 flex items-center justify-between space-x-2 transition-colors ${language === lang.code
                          ? 'bg-cyan-400/20 text-cyan-400'
                          : 'text-gray-300 hover:text-cyan-400'
                          }`}
                      >
                        <span className="text-sm font-medium">{lang.code}</span>
                        <div className="flex items-center space-x-1">
                          {lang.flags}
                        </div>
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Dark Mode Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full bg-slate-800 text-cyan-400 hover:bg-slate-700 transition-colors"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-full bg-slate-800 text-cyan-400"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMenuOpen ? 1 : 0,
            height: isMenuOpen ? 'auto' : 0
          }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4">
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                whileHover={{ x: 10 }}
                onClick={() => setIsMenuOpen(false)}
                className="block text-gray-300 hover:text-cyan-400 transition-colors duration-200"
              >
                {item.label}
              </motion.a>
            ))}
          </div>
        </motion.nav>
      </div>
    </motion.header>
  );
};

export default Header;