import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Github, Linkedin, ArrowUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const socialLinks = [
    { icon: Github, href: 'https://github.com/Maselu', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/mamadou-cellou-dembele-diallo-077429218/', label: 'LinkedIn' },
    /* { icon: Twitter, href: '#', label: 'Twitter' } */
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Bot className="h-8 w-8 text-cyan-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {t.footer.brand}
              </span>
            </div>
            <p className="text-gray-400 max-w-md">
              {t.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">{t.footer.quickLinks}</h3>
            <ul className="space-y-2">
              {[t.nav.about, t.nav.experience, t.nav.skills, t.nav.projects, t.nav.contact].map((item, index) => (
                <li key={item}>
                  <motion.a
                    href={`#${['about', 'experience', 'skills', 'projects', 'contact'][index]}`}
                    whileHover={{ x: 5 }}
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">{t.footer.connect}</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-3 bg-slate-800 text-gray-400 hover:text-cyan-400 hover:bg-slate-700 rounded-lg transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            {t.footer.rights}
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="mt-4 md:mt-0 p-2 bg-slate-800 text-cyan-400 hover:bg-slate-700 rounded-lg transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;