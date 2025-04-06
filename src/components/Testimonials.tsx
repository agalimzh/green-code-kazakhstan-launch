
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface TestimonialsProps {
  language: 'ru' | 'kz';
}

const Testimonials = ({ language }: TestimonialsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const content = {
    ru: {
      title: 'Отзывы наших выпускников',
      subtitle: 'Узнайте, что говорят студенты о нашей школе',
      testimonials: [
        {
          name: 'Айгуль Сатпаева',
          role: 'Бывший бухгалтер, сейчас Data Analyst',
          image: '/placeholder.svg',
          text: 'Благодаря курсу "SQL + Power BI" я смогла сменить профессию после 10 лет работы бухгалтером. Теперь я работаю аналитиком данных в IT-компании с зарплатой на 40% выше.',
          rating: 5
        },
        {
          name: 'Мурат Алиев',
          role: 'Маркетолог, повысил квалификацию',
          image: '/placeholder.svg',
          text: 'Курс Excel + Power BI полностью изменил мой подход к анализу маркетинговых данных. Теперь я могу создавать подробные автоматизированные отчеты, которые экономят мне часы работы.',
          rating: 5
        },
        {
          name: 'Дана Исмаилова',
          role: 'Product Manager в стартапе',
          image: '/placeholder.svg',
          text: 'Полный курс аналитики данных дал мне комплексное понимание работы с информацией. Преподаватели всегда готовы помочь даже после окончания курса.',
          rating: 4
        }
      ]
    },
    kz: {
      title: 'Түлектеріміздің пікірлері',
      subtitle: 'Студенттеріміздің біздің мектеп туралы не айтатынын біліңіз',
      testimonials: [
        {
          name: 'Айгүл Сатпаева',
          role: 'Бұрынғы бухгалтер, қазір Data Analyst',
          image: '/placeholder.svg',
          text: '"SQL + Power BI" курсының арқасында 10 жыл бухгалтер болып жұмыс істегеннен кейін мамандығымды өзгерте алдым. Қазір мен IT-компанияда жалақысы 40%-ға жоғары деректер талдаушысы болып жұмыс істеймін.',
          rating: 5
        },
        {
          name: 'Мұрат Әлиев',
          role: 'Маркетолог, біліктілігін арттырды',
          image: '/placeholder.svg',
          text: 'Excel + Power BI курсы маркетингтік деректерді талдауға деген көзқарасымды толығымен өзгертті. Енді мен жұмыс сағаттарын үнемдейтін егжей-тегжейлі автоматтандырылған есептерді жасай аламын.',
          rating: 5
        },
        {
          name: 'Дана Исмаилова',
          role: 'Стартаптағы Product Manager',
          image: '/placeholder.svg',
          text: 'Деректерді талдаудың толық курсы маған ақпаратпен жұмыс істеудің жан-жақты түсінігін берді. Оқытушылар курс аяқталғаннан кейін де көмек көрсетуге әрдайым дайын.',
          rating: 4
        }
      ]
    }
  };

  const { title, subtitle, testimonials } = content[language];

  const handlePrev = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section id="testimonials" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">{title}</h2>
          <p className="text-lg text-proitivity-neutral-dark max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="flex overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`min-w-full transition-all duration-500 transform ${
                  index === currentIndex ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full absolute'
                }`}
                style={{ display: index === currentIndex ? 'block' : 'none' }}
              >
                <Card className="border border-proitivity-neutral-medium">
                  <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                      <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover" 
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              size={18} 
                              className={i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                            />
                          ))}
                        </div>
                        <p className="text-lg mb-4 italic">"{testimonial.text}"</p>
                        <h4 className="font-semibold text-proitivity-green-dark">{testimonial.name}</h4>
                        <p className="text-sm text-proitivity-neutral-dark">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={handlePrev}
              className="p-2 rounded-full bg-proitivity-green-light/20 hover:bg-proitivity-green-light/40 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="text-proitivity-green-dark" />
            </button>
            <button 
              onClick={handleNext}
              className="p-2 rounded-full bg-proitivity-green-light/20 hover:bg-proitivity-green-light/40 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="text-proitivity-green-dark" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
