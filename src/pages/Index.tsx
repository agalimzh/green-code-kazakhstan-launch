
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Advantages from '../components/Advantages';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import CourseCard from '../components/CourseCard';
import FAQ from '../components/FAQ';
import { Leaf } from 'lucide-react';

const Index = () => {
  const [language, setLanguage] = useState<'ru' | 'kz'>('ru');

  const courses = {
    ru: [
      {
        title: 'Advanced Excel + Power BI',
        description: 'Освойте продвинутые функции Excel и создавайте интерактивные дашборды в Power BI.',
        duration: '2 месяца (8 недель)',
        price: '80 000 ₸',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80',
        ctaText: 'Подробнее',
      },
      {
        title: 'SQL + Power BI: Analytics Mastery',
        description: 'Научитесь извлекать данные с помощью SQL и визуализировать их в Power BI для принятия решений.',
        duration: '3 месяца (12 недель)',
        price: '120 000 ₸',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        ctaText: 'Подробнее',
        popular: true,
      },
      {
        title: 'Complete Data Analytics Course',
        description: 'Полный курс по аналитике данных: Excel, SQL, Python, Power BI для карьеры аналитика.',
        duration: '6 месяцев (24 недели)',
        price: '250 000 ₸',
        image: 'https://images.unsplash.com/photo-1599658880436-c61792e70672?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        ctaText: 'Подробнее',
      },
    ],
    kz: [
      {
        title: 'Advanced Excel + Power BI',
        description: 'Excel-дің озық функцияларын үйреніп, Power BI-де интерактивті дашбордтар жасаңыз.',
        duration: '2 ай (8 апта)',
        price: '80 000 ₸',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80',
        ctaText: 'Толығырақ',
      },
      {
        title: 'SQL + Power BI: Analytics Mastery',
        description: 'SQL көмегімен деректерді алуды және оларды шешім қабылдау үшін Power BI-де визуализациялауды үйреніңіз.',
        duration: '3 ай (12 апта)',
        price: '120 000 ₸',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        ctaText: 'Толығырақ',
        popular: true,
      },
      {
        title: 'Complete Data Analytics Course',
        description: 'Деректерді талдаудың толық курсы: Excel, SQL, Python, Power BI талдаушы мансабы үшін.',
        duration: '6 ай (24 апта)',
        price: '250 000 ₸',
        image: 'https://images.unsplash.com/photo-1599658880436-c61792e70672?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        ctaText: 'Толығырақ',
      },
    ],
  };

  const coursesSectionTitle = {
    ru: {
      title: 'Наши курсы',
      subtitle: 'Выберите программу, которая подходит именно вам',
    },
    kz: {
      title: 'Біздің курстар',
      subtitle: 'Сізге жақсы сәйкес келетін бағдарламаны таңдаңыз',
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar language={language} onLanguageChange={setLanguage} />
      
      <main>
        {/* Hero Section */}
        <Hero language={language} />
        
        {/* Advantages Section */}
        <Advantages language={language} />
        
        {/* Courses Section */}
        <section id="courses" className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-proitivity-green-dark to-proitivity-blue-dark bg-clip-text text-transparent">
                {coursesSectionTitle[language].title}
              </h2>
              <p className="text-lg text-proitivity-neutral-dark max-w-2xl mx-auto">
                {coursesSectionTitle[language].subtitle}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses[language].map((course, index) => (
                <CourseCard
                  key={index}
                  title={course.title}
                  description={course.description}
                  duration={course.duration}
                  price={course.price}
                  image={course.image}
                  ctaText={course.ctaText}
                  popular={course.popular}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Why Choose Us */}
        <section id="about" className="py-16 bg-proitivity-blue-light/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/leaf-pattern.png')] opacity-5 z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-proitivity-green-light/20 rounded-full mr-4">
                      <Leaf className="h-6 w-6 text-proitivity-green-dark" />
                    </div>
                    <h3 className="text-2xl font-bold text-proitivity-green-dark">
                      {language === 'ru' ? 'О Proitivity School' : 'Proitivity School туралы'}
                    </h3>
                  </div>
                  
                  <ul className="space-y-4">
                    {(language === 'ru' ? [
                      'Фокус на практических навыках',
                      'Опытные преподаватели',
                      'Успешные выпускники',
                      'Помощь с текущими рабочими задачами',
                      'Участники Tech Orda и резиденты Astana Hub'
                    ] : [
                      'Практикалық дағдыларға назар аудару',
                      'Тәжірибелі оқытушылар',
                      'Табысты түлектер',
                      'Ағымдағы жұмыс тапсырмаларына көмек',
                      'Tech Orda қатысушылары және Astana Hub резиденттері'
                    ]).map((item, index) => (
                      <li key={index} className="flex items-center">
                        <div className="h-2 w-2 bg-proitivity-green-light rounded-full mr-3"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-proitivity-green-dark to-proitivity-blue-dark bg-clip-text text-transparent">
                  {language === 'ru' 
                    ? 'Мы помогаем взрослым осваивать IT-навыки и расти в карьере' 
                    : 'Біз ересектерге IT-дағдыларын игеруге және мансапта өсуге көмектесеміз'}
                </h2>
                <p className="text-lg mb-6 text-proitivity-neutral-dark">
                  {language === 'ru'
                    ? 'Наша миссия — сделать IT-образование доступным для каждого взрослого в Казахстане, кто хочет развиваться и находить новые возможности в современном цифровом мире.'
                    : 'Біздің миссиямыз — IT-білімді қазіргі цифрлық әлемде дамығысы келетін және жаңа мүмкіндіктер табатын Қазақстандағы әр ересек адамға қол жетімді ету.'}
                </p>
                <p className="text-lg text-proitivity-neutral-dark">
                  {language === 'ru'
                    ? 'Мы фокусируемся на предоставлении практических навыков, которые наши студенты могут сразу применить в своей работе, что приводит к быстрому карьерному росту и увеличению дохода.'
                    : 'Біз студенттеріміз өз жұмысында бірден қолдана алатын практикалық дағдыларды беруге назар аударамыз, бұл жылдам мансаптық өсуге және табыстың артуына әкеледі.'}
                </p>
              </div>
            </div>
          </div>
        </section>
        
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
