
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroProps {
  language: 'ru' | 'kz';
}

const Hero = ({ language }: HeroProps) => {
  const content = {
    ru: {
      heading: 'IT-навыки для реального карьерного развития',
      subheading: 'Освойте твердые навыки работы с данными для плавного перехода в сферу IT и начни менять свою карьеру уже сегодня.',
      cta1: 'Узнать больше о курсах',
      cta2: 'Записаться на бесплатное занятие',
    },
    kz: {
      heading: 'Нақты мансаптық дамуға арналған IT-дағдылар',
      subheading: 'IT саласына жеңіл ауысу үшін деректермен жұмыс істеудің берік дағдыларын үйреніңіз және бүгін мансабыңызды өзгертуді бастаңыз.',
      cta1: 'Курстар туралы көбірек білу',
      cta2: 'Тегін сабаққа жазылу',
    }
  };

  const { heading, subheading, cta1, cta2 } = content[language];

  const handleLearnMoreClick = () => {
    document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFreeClassClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-white to-proitivity-blue-light relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[url('/hero-bg.png')] opacity-5 z-0"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-[10%] left-[5%] w-16 h-16 md:w-24 md:h-24 bg-proitivity-green-light/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-[20%] right-[10%] w-20 h-20 md:w-32 md:h-32 bg-proitivity-blue-medium/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-[40%] right-[20%] w-12 h-12 md:w-16 md:h-16 bg-proitivity-green-light/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <div className="lg:w-1/2">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold mb-6 bg-gradient-to-r from-proitivity-green-dark via-proitivity-green-light to-proitivity-blue-dark bg-clip-text text-transparent">
                {heading}
              </h1>
              <p className="text-lg md:text-xl text-proitivity-neutral-dark mb-8 max-w-2xl">
                {subheading}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-proitivity-green-dark hover:bg-proitivity-green-light text-white px-6 py-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                  onClick={handleLearnMoreClick}
                >
                  {cta1}
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  className="border-2 border-proitivity-green-dark text-proitivity-green-dark hover:bg-proitivity-green-dark hover:text-white px-6 py-6 transition-all transform hover:-translate-y-1"
                  onClick={handleFreeClassClick}
                >
                  {cta2}
                </Button>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-proitivity-green-light to-proitivity-blue-dark opacity-60 blur-xl animate-pulse"></div>
              <div className="absolute -inset-1 rounded-lg bg-white/30 backdrop-blur-sm"></div>
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="IT Education" 
                className="object-cover rounded-lg shadow-xl relative w-full max-w-lg transform transition-transform hover:scale-105 duration-500"
              />
              <div className="absolute -bottom-4 -right-4 bg-proitivity-green-dark text-white p-4 rounded-lg shadow-lg transform rotate-3 animate-fade-in" style={{animationDelay: '0.5s'}}>
                <p className="text-sm font-medium">
                  {language === 'ru' ? '97% успеваемость' : '97% табыстылық'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
