
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

interface CTASectionProps {
  language: 'ru' | 'kz';
}

const CTASection = ({ language }: CTASectionProps) => {
  const content = {
    ru: {
      title: 'Готовы начать свой путь в IT?',
      subtitle: 'Запишитесь на бесплатное ознакомительное занятие и узнайте, как наши курсы могут изменить вашу карьеру',
      buttonText: 'Записаться сейчас'
    },
    kz: {
      title: 'IT-дегі жолыңызды бастауға дайынсыз ба?',
      subtitle: 'Тегін таныстыру сабағына жазылыңыз және біздің курстарымыз сіздің мансабыңызды қалай өзгерте алатынын біліңіз',
      buttonText: 'Қазір жазылу'
    }
  };

  const { title, subtitle, buttonText } = content[language];

  return (
    <section className="py-16 bg-gradient-to-r from-proitivity-green-dark to-proitivity-blue-dark text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-[20%] left-[10%] w-64 h-64 border border-white/30 rounded-full"></div>
        <div className="absolute bottom-[10%] right-[5%] w-96 h-96 border border-white/20 rounded-full"></div>
        <div className="absolute top-[30%] right-[20%] w-32 h-32 border border-white/40 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-3xl mx-auto transform hover:scale-[1.01] transition-transform duration-300">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-md">{title}</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">{subtitle}</p>
          <Button className="bg-white text-proitivity-green-dark hover:bg-proitivity-blue-light hover:text-proitivity-green-dark text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
            {buttonText}
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
      </div>
    </section>
  );
};

export default CTASection;
