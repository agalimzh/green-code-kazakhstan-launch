
import { Instagram, Linkedin, MessageCircle, Send } from 'lucide-react';

interface FooterProps {
  language: 'ru' | 'kz';
}

const Footer = ({ language }: FooterProps) => {
  const content = {
    ru: {
      copyright: '© 2025 Proitivity School. Все права защищены.',
      links: [
        { name: 'Главная', href: '#home' },
        { name: 'Курсы', href: '#courses' },
        { name: 'О нас', href: '#about' },
        { name: 'FAQ', href: '#faq' },
        { name: 'Контакты', href: '#contact' },
      ],
      address: 'г. Алматы, ул. Кунаева, 77',
      category: 'IT-образование',
      phone: '+7 (777) 123-45-67',
      email: 'info@proitivity.kz'
    },
    kz: {
      copyright: '© 2025 Proitivity School. Барлық құқықтар қорғалған.',
      links: [
        { name: 'Басты бет', href: '#home' },
        { name: 'Курстар', href: '#courses' },
        { name: 'Біз туралы', href: '#about' },
        { name: 'FAQ', href: '#faq' },
        { name: 'Байланыс', href: '#contact' },
      ],
      address: 'Алматы қ., Кунаев к-сі, 77',
      category: 'IT-білім беру',
      phone: '+7 (777) 123-45-67',
      email: 'info@proitivity.kz'
    }
  };

  const { copyright, links, address, category, phone, email } = content[language];

  return (
    <footer className="bg-proitivity-green-dark text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <a href="#home" className="mb-4 flex items-center">
              <img src="/favicon.ico" alt="Proitivity School" className="h-10 mr-3" />
              <div className="text-xl font-bold">Proitivity School</div>
            </a>
            <p className="text-white/80 mb-4">{category}</p>
            <p className="text-white/80 mb-4">{address}</p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/proitivity/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white/80 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/in/arsen-galimzhanov/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white/80 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://wa.me/77760076442" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-white/80 hover:text-white transition-colors">
                <MessageCircle size={20} fill="currentColor" />
              </a>
              <a href="https://t.me/proitivity" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="text-white/80 hover:text-white transition-colors">
                <Send size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2">
              <li>
                <a href={`tel:${phone.replace(/\s+/g, '')}`} className="text-white/80 hover:text-white transition-colors">
                  {phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${email}`} className="text-white/80 hover:text-white transition-colors">
                  {email}
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{language === 'ru' ? 'Подписаться на новости' : 'Жаңалықтарға жазылу'}</h3>
            <form onSubmit={(e) => {e.preventDefault(); alert(language === 'ru' ? 'Спасибо за подписку!' : 'Жазылғаныңыз үшін рахмет!')}}>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="px-4 py-2 bg-white/10 text-white placeholder:text-white/50 rounded-l-md focus:outline-none w-full"
                  required
                />
                <button type="submit" className="bg-white text-proitivity-green-dark px-4 py-2 rounded-r-md hover:bg-proitivity-blue-light transition-colors">
                  OK
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/20 text-center text-white/70">
          <p>{copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
