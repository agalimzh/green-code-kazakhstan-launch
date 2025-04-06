
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQProps {
  language: 'ru' | 'kz';
}

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = ({ language }: FAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default
  
  const faqItems: Record<'ru' | 'kz', FAQItem[]> = {
    ru: [
      {
        question: 'Какие навыки я получу после прохождения курсов?',
        answer: 'В зависимости от выбранного курса, вы освоите Excel, SQL, Power BI, основы Python для анализа данных, сможете создавать интерактивные дашборды и делать полноценный анализ данных, что значительно улучшит ваши карьерные перспективы.'
      },
      {
        question: 'Нужны ли мне предварительные знания IT?',
        answer: 'Нет, наши курсы разработаны так, чтобы их мог освоить каждый, даже без предварительного опыта в IT. Мы начинаем с основ и постепенно переходим к более сложным темам.'
      },
      {
        question: 'Какой график обучения?',
        answer: 'Занятия проходят 2-3 раза в неделю по вечерам (после 19:00) и в выходные дни, что удобно для работающих людей. Вы также получите доступ к записям всех занятий, чтобы изучать материал в удобном для вас темпе.'
      },
      {
        question: 'Как проходит обучение?',
        answer: 'Обучение включает онлайн-лекции в прямом эфире, практические задания, работу над реальными проектами и индивидуальные консультации с преподавателями. Мы используем интерактивный подход, чтобы сделать обучение максимально эффективным.'
      },
      {
        question: 'Помогаете ли вы с трудоустройством?',
        answer: 'Да, мы помогаем нашим выпускникам с составлением резюме, подготовкой к собеседованиям и делимся актуальными вакансиями от наших партнеров. У нас есть специальная программа карьерного коучинга для студентов.'
      },
    ],
    kz: [
      {
        question: 'Курстарды аяқтағаннан кейін қандай дағдыларды үйренемін?',
        answer: 'Таңдалған курсқа байланысты сіз Excel, SQL, Power BI, деректерді талдауға арналған Python негіздерін меңгересіз, интерактивті дашбордтар жасай аласыз және толыққанды деректерді талдай аласыз, бұл сіздің мансаптық перспективаларыңызды айтарлықтай жақсартады.'
      },
      {
        question: 'Маған IT бойынша алдын ала білім қажет пе?',
        answer: 'Жоқ, біздің курстар алдын ала IT тәжірибесі болмаса да, оны әркім меңгере алатындай етіп жасалған. Біз негіздерден бастап, біртіндеп күрделі тақырыптарға көшеміз.'
      },
      {
        question: 'Оқу кестесі қандай?',
        answer: 'Сабақтар аптасына 2-3 рет кешке (19:00-ден кейін) және демалыс күндері өтеді, бұл жұмыс істейтін адамдар үшін ыңғайлы. Сондай-ақ, барлық сабақтардың жазбаларына қол жеткізе аласыз, бұл сізге материалды өзіңізге ыңғайлы қарқынмен зерттеуге мүмкіндік береді.'
      },
      {
        question: 'Оқыту қалай жүреді?',
        answer: 'Оқытуға тікелей эфирдегі онлайн дәрістер, практикалық тапсырмалар, нақты жобалармен жұмыс және оқытушылармен жеке кеңестер кіреді. Біз оқытуды барынша тиімді ету үшін интерактивті тәсілді қолданамыз.'
      },
      {
        question: 'Жұмысқа орналасуға көмектесесіз бе?',
        answer: 'Иә, біз түлектерімізге түйіндеме жасауға, сұхбаттарға дайындалуға көмектесеміз және серіктестеріміздің өзекті бос жұмыс орындарымен бөлісеміз. Студенттерге арналған арнайы мансаптық коучинг бағдарламамыз бар.'
      },
    ]
  };
  
  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  const items = faqItems[language];
  
  return (
    <section id="faq" className="py-16 bg-proitivity-blue-light/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-proitivity-green-dark mb-4">
            {language === 'ru' ? 'Часто задаваемые вопросы' : 'Жиі қойылатын сұрақтар'}
          </h2>
          <p className="text-lg text-proitivity-neutral-dark max-w-2xl mx-auto">
            {language === 'ru' 
              ? 'Ответы на самые популярные вопросы о наших курсах и обучении' 
              : 'Біздің курстар мен оқыту туралы ең танымал сұрақтарға жауаптар'}
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {items.map((item, index) => (
            <div 
              key={index}
              className={`mb-4 border rounded-lg ${
                openIndex === index 
                  ? 'bg-white shadow-lg border-proitivity-green-light' 
                  : 'bg-white/50 hover:bg-white hover:shadow-md transition-all'
              }`}
            >
              <button
                className="flex justify-between items-center w-full p-5 text-left"
                onClick={() => toggleItem(index)}
                aria-expanded={openIndex === index}
              >
                <h3 className="text-lg font-medium text-proitivity-green-dark">
                  {item.question}
                </h3>
                <span className="text-proitivity-green-dark ml-4">
                  {openIndex === index ? <ChevronUp /> : <ChevronDown />}
                </span>
              </button>
              
              <div 
                className={`transition-all duration-300 overflow-hidden ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-5 pt-0 text-proitivity-neutral-dark">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
