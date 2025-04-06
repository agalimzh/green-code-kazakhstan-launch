
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

  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-white to-proitivity-blue-light relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/leaf-pattern.png')] opacity-5 z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <div className="lg:w-1/2 animate-fade-in">
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold mb-6 text-gradient">
              {heading}
            </h1>
            <p className="text-lg md:text-xl text-proitivity-neutral-dark mb-8 max-w-2xl">
              {subheading}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-proitivity-green-dark hover:bg-proitivity-green-light text-white px-6 py-6">
                {cta1}
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-proitivity-green-dark text-proitivity-green-dark hover:bg-proitivity-green-dark hover:text-white px-6 py-6">
                {cta2}
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="animate-pulse absolute -inset-0.5 rounded-lg bg-gradient-to-r from-proitivity-green-light to-proitivity-blue-dark opacity-50 blur"></div>
              <img 
                src="/placeholder.svg" 
                alt="IT Education" 
                className="object-cover rounded-lg shadow-xl relative w-full max-w-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
