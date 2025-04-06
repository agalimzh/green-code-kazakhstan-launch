
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Advantages from '../components/Advantages';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';
import CoursesSection from '../components/CoursesSection';
import AboutSection from '../components/AboutSection';

const Index = () => {
  const [language, setLanguage] = useState<'ru' | 'kz'>('ru');

  return (
    <div className="min-h-screen">
      <Navbar language={language} onLanguageChange={setLanguage} />
      
      <main>
        {/* Hero Section */}
        <Hero language={language} />
        
        {/* Advantages Section */}
        <Advantages language={language} />
        
        {/* Courses Section */}
        <CoursesSection language={language} />
        
        {/* About Section */}
        <AboutSection language={language} />
        
        {/* FAQ Section */}
        <FAQ language={language} />
        
        {/* Testimonials */}
        <Testimonials language={language} />
        
        {/* CTA Section */}
        <CTASection language={language} />
        
        {/* Contact Form */}
        <ContactForm language={language} />
      </main>
      
      <Footer language={language} />
    </div>
  );
};

export default Index;
