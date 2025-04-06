import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LanguageToggle from './LanguageToggle';

interface NavbarProps {
  language: 'ru' | 'kz';
  onLanguageChange: (lang: 'ru' | 'kz') => void;
}

const Navbar = ({ language, onLanguageChange }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = {
    ru: [
      { name: 'Главная', href: '#home' },
      { name: 'Курсы', href: '#courses' },
      { name: 'О нас', href: '#about' },
      { name: 'Карьерный рост', href: '#career' },
      { name: 'FAQ', href: '#faq' },
      { name: 'Блог', href: '#blog' },
      { name: 'Контакты', href: '#contact' },
    ],
    kz: [
      { name: 'Басты бет', href: '#home' },
      { name: 'Курстар', href: '#courses' },
      { name: 'Біз туралы', href: '#about' },
      { name: 'Мансап өсу', href: '#career' },
      { name: 'FAQ', href: '#faq' },
      { name: 'Блог', href: '#blog' },
      { name: 'Байланыс', href: '#contact' },
    ],
  };

  const items = navItems[language];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold text-proitivity-green-dark flex items-center">
          <img src="/favicon.ico" alt="Proitivity School" className="h-10 mr-3" />
          Proitivity School
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {items.map((item) => (
              <li key={item.name}>
                <a 
                  href={item.href} 
                  className="text-proitivity-neutral-dark hover:text-proitivity-green-dark transition-colors"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <LanguageToggle currentLang={language} onChange={onLanguageChange} />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center space-x-4">
          <LanguageToggle currentLang={language} onChange={onLanguageChange} />
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-proitivity-green-dark"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-md py-4 animate-fade-in">
            <ul className="flex flex-col space-y-4 px-4">
              {items.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className="text-proitivity-neutral-dark hover:text-proitivity-green-dark transition-colors block py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
