
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MessageCircle } from 'lucide-react';

interface ContactFormProps {
  language: 'ru' | 'kz';
}

const ContactForm = ({ language }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const content = {
    ru: {
      title: 'Связаться с нами',
      subtitle: 'Остались вопросы? Заполните форму, и мы свяжемся с вами в ближайшее время',
      name: 'Имя',
      email: 'Email',
      phone: 'Телефон',
      message: 'Сообщение',
      buttonText: 'Отправить сообщение',
      contactInfo: 'Контактная информация',
      emailLabel: 'Email:',
      phoneLabel: 'Телефон:',
      chatLabel: 'Чат:',
      emailAddress: 'info@proitivity.kz',
      phoneNumber: '+7 (777) 123-45-67',
      chatText: 'Открыть чат с консультантом'
    },
    kz: {
      title: 'Бізбен байланысу',
      subtitle: 'Сұрақтарыңыз бар ма? Формаларды толтырыңыз, біз сізбен жақын арада байланысамыз',
      name: 'Аты',
      email: 'Email',
      phone: 'Телефон',
      message: 'Хабарлама',
      buttonText: 'Хабарламаны жіберу',
      contactInfo: 'Байланыс ақпараты',
      emailLabel: 'Email:',
      phoneLabel: 'Телефон:',
      chatLabel: 'Чат:',
      emailAddress: 'info@proitivity.kz',
      phoneNumber: '+7 (777) 123-45-67',
      chatText: 'Кеңесшімен чатты ашу'
    }
  };

  const { 
    title, subtitle, name, email, phone, message, buttonText,
    contactInfo, emailLabel, phoneLabel, chatLabel, emailAddress, phoneNumber, chatText
  } = content[language];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - would connect to backend in real implementation
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
    // Show success message (in a real implementation)
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">{title}</h2>
          <p className="text-lg text-proitivity-neutral-dark max-w-2xl mx-auto">{subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-lg border border-proitivity-neutral-medium">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-proitivity-neutral-dark mb-2">
                  {name}
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-proitivity-neutral-dark mb-2">
                  {email}
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="phone" className="block text-sm font-medium text-proitivity-neutral-dark mb-2">
                  {phone}
                </label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-proitivity-neutral-dark mb-2">
                  {message}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full h-32"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-proitivity-green-dark hover:bg-proitivity-green-light text-white"
              >
                {buttonText}
              </Button>
            </form>
          </div>
          
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-8 text-proitivity-green-dark">{contactInfo}</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-proitivity-blue-light p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-proitivity-green-dark" />
                </div>
                <div>
                  <h4 className="font-medium text-proitivity-neutral-dark">{emailLabel}</h4>
                  <a href={`mailto:${emailAddress}`} className="text-proitivity-green-dark hover:underline">
                    {emailAddress}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-proitivity-blue-light p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-proitivity-green-dark" />
                </div>
                <div>
                  <h4 className="font-medium text-proitivity-neutral-dark">{phoneLabel}</h4>
                  <a href={`tel:${phoneNumber.replace(/\s+/g, '')}`} className="text-proitivity-green-dark hover:underline">
                    {phoneNumber}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-proitivity-blue-light p-3 rounded-full mr-4">
                  <MessageCircle className="h-6 w-6 text-proitivity-green-dark" />
                </div>
                <div>
                  <h4 className="font-medium text-proitivity-neutral-dark">{chatLabel}</h4>
                  <a href="#" className="text-proitivity-green-dark hover:underline">
                    {chatText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
