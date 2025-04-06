
import { Leaf } from 'lucide-react';

interface AboutSectionProps {
  language: 'ru' | 'kz';
}

const AboutSection = ({ language }: AboutSectionProps) => {
  return (
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
  );
};

export default AboutSection;
