
import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MessageCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

interface ContactFormProps {
  language: 'ru' | 'kz';
}

const ContactForm = ({ language }: ContactFormProps) => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      chatText: 'Открыть чат с консультантом',
      successMessage: 'Сообщение отправлено! Мы свяжемся с вами в ближайшее время.',
      errorMessage: 'Возникла ошибка. Пожалуйста, попробуйте еще раз.'
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
      chatText: 'Кеңесшімен чатты ашу',
      successMessage: 'Хабарлама жіберілді! Біз сізбен жақын арада байланысамыз.',
      errorMessage: 'Қате пайда болды. Қайтадан көріңіз.'
    }
  };

  const { 
    title, subtitle, name, email, phone, message, buttonText,
    contactInfo, emailLabel, phoneLabel, chatLabel, emailAddress, phoneNumber, chatText,
    successMessage, errorMessage
  } = content[language];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: language === 'ru' ? 'Ошибка' : 'Қате',
        description: language === 'ru' ? 'Пожалуйста, заполните все обязательные поля' : 'Барлық міндетті өрістерді толтырыңыз',
        variant: 'destructive'
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Send email using EmailJS with updated credentials
      const serviceId = 'proitivity.school';
      const templateId = 'template_sjrrjgp';
      const publicKey = 'xZAgwMtbYsWERz5Es';

      // Update template parameters to match your EmailJS template variables
      const templateParams = {
        from_name: formData.name,
        reply_to: formData.email,
        phone_number: formData.phone,
        message: formData.message,
      };

      console.log('Sending email with params:', templateParams);

      // Send the email
      const result = await emailjs.send(serviceId, templateId, templateParams, publicKey);
      console.log('Email sent successfully:', result.text);
      
      // Show success message
      toast({
        title: language === 'ru' ? 'Успешно!' : 'Сәтті!',
        description: successMessage,
      });
      
      // Reset form
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Failed to send email:', error);
      
      // Show error message
      toast({
        title: language === 'ru' ? 'Ошибка' : 'Қате',
        description: errorMessage,
        variant: 'destructive'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOpenChat = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // Implement chat functionality or redirect to chat service
    toast({
      title: language === 'ru' ? 'Чат' : 'Чат',
      description: language === 'ru' ? 'Функция чата скоро будет доступна' : 'Чат функциясы жақында қол жетімді болады',
    });
  };

  return (
    <section id="contact" className="section-padding bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-proitivity-green-dark to-proitivity-blue-dark bg-clip-text text-transparent">{title}</h2>
          <p className="text-lg text-proitivity-neutral-dark max-w-2xl mx-auto">{subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-lg border border-proitivity-neutral-medium">
            <form ref={formRef} onSubmit={handleSubmit}>
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
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-proitivity-green-dark hover:bg-proitivity-green-light text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {language === 'ru' ? 'Отправка...' : 'Жіберілуде...'}
                  </span>
                ) : buttonText}
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
                  <a href="#" onClick={handleOpenChat} className="text-proitivity-green-dark hover:underline">
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
