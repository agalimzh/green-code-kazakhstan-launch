
import { Users, BookOpen, TrendingUp, Clock } from 'lucide-react';

interface AdvantagesProps {
  language: 'ru' | 'kz';
}

const Advantages = ({ language }: AdvantagesProps) => {
  const content = {
    ru: {
      title: 'Почему выбирают нас',
      subtitle: 'Proitivity School предлагает эффективную и практичную образовательную программу',
      advantages: [
        {
          icon: <BookOpen className="h-10 w-10 text-proitivity-green-dark" />,
          title: 'Практические навыки',
          description: 'Фокус на реальных проектах и кейсах, которые можно сразу применить на работе'
        },
        {
          icon: <Clock className="h-10 w-10 text-proitivity-green-dark" />,
          title: 'Гибкий график',
          description: 'Учитесь в удобное для вас время, совмещая обучение с работой'
        },
        {
          icon: <Users className="h-10 w-10 text-proitivity-green-dark" />,
          title: 'Опытные преподаватели',
          description: 'Наши преподаватели - практикующие специалисты из ведущих IT-компаний'
        },
        {
          icon: <TrendingUp className="h-10 w-10 text-proitivity-green-dark" />,
          title: 'Карьерный рост',
          description: 'Помощь в трудоустройстве и развитии карьеры после окончания обучения'
        },
      ]
    },
    kz: {
      title: 'Неліктен бізді таңдайды',
      subtitle: 'Proitivity School тиімді және практикалық білім беру бағдарламасын ұсынады',
      advantages: [
        {
          icon: <BookOpen className="h-10 w-10 text-proitivity-green-dark" />,
          title: 'Практикалық дағдылар',
          description: 'Жұмыста бірден қолдануға болатын нақты жобалар мен кейстерге назар аудару'
        },
        {
          icon: <Clock className="h-10 w-10 text-proitivity-green-dark" />,
          title: 'Икемді кесте',
          description: 'Өзіңізге ыңғайлы уақытта оқыңыз, оқуды жұмыспен үйлестіріңіз'
        },
        {
          icon: <Users className="h-10 w-10 text-proitivity-green-dark" />,
          title: 'Тәжірибелі оқытушылар',
          description: 'Біздің оқытушыларымыз - жетекші IT компаниялардың тәжірибелі мамандары'
        },
        {
          icon: <TrendingUp className="h-10 w-10 text-proitivity-green-dark" />,
          title: 'Мансаптық өсу',
          description: 'Оқуды аяқтағаннан кейін жұмысқа орналасуға және мансапты дамытуға көмек'
        },
      ]
    }
  };

  const { title, subtitle, advantages } = content[language];

  return (
    <section id="advantages" className="section-padding bg-proitivity-blue-light/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">{title}</h2>
          <p className="text-lg text-proitivity-neutral-dark max-w-2xl mx-auto">{subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center card-hover"
            >
              <div className="mb-4 p-4 bg-proitivity-blue-light rounded-full">
                {advantage.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-proitivity-green-dark">
                {advantage.title}
              </h3>
              <p className="text-proitivity-neutral-dark">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
