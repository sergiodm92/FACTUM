import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ThemeToggle from './ThemeToggle';
import LanguageSelector from './LanguageSelector';
import FactumIcon from './FactumIcon'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();

  const navigation = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.software'), href: '/software' },
    { name: t('nav.consulting'), href: '/consulting' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.contact'), href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <FactumIcon/>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'bg-orange-100 dark:bg-orange-900/50 text-orange-600 dark:text-orange-300'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-orange-900/30'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center space-x-2 ml-4 border-l pl-4 dark:border-gray-700">
              <ThemeToggle />
              <LanguageSelector />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <LanguageSelector />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900">
            {navigation.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(item.href)
                    ? 'bg-orange-100 dark:bg-orange-900/50 text-orange-600 dark:text-orange-300'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-orange-900/30'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}