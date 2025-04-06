
import { Button } from '@/components/ui/button';

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
    <section className="py-16 bg-gradient-to-r from-proitivity-green-dark to-proitivity-blue-dark text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">{subtitle}</p>
        <Button className="bg-white text-proitivity-green-dark hover:bg-proitivity-blue-light hover:text-proitivity-green-dark text-lg px-8 py-6">
          {buttonText}
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
