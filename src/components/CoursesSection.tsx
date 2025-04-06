
import { useCallback } from 'react';
import CourseCard from './CourseCard';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";

interface CoursesSectionProps {
  language: 'ru' | 'kz';
}

const CoursesSection = ({ language }: CoursesSectionProps) => {
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
        title: 'AI Prompt Engineering',
        description: 'Изучите искусство создания эффективных промптов для генеративных AI систем, таких как ChatGPT, Midjourney и DALL-E.',
        duration: '1.5 месяца (6 недель)',
        price: '90 000 ₸',
        image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
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
        title: 'AI Prompt Engineering',
        description: 'ChatGPT, Midjourney және DALL-E сияқты генеративтік AI жүйелері үшін тиімді промпттарды жасау өнерін зерттеңіз.',
        duration: '1.5 ай (6 апта)',
        price: '90 000 ₸',
        image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
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
        
        <div className="relative mx-auto max-w-7xl">
          {/* Visual indicators for scrolling */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-16 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-16 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {courses[language].map((course, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <CourseCard
                    title={course.title}
                    description={course.description}
                    duration={course.duration}
                    price={course.price}
                    image={course.image}
                    ctaText={course.ctaText}
                    popular={course.popular}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="flex justify-between items-center mt-8">
              <div className="flex items-center gap-2">
                <div className="text-sm text-proitivity-neutral-dark hidden md:block">{language === 'ru' ? 'Прокрутите для просмотра всех курсов' : 'Барлық курстарды қарау үшін айналдырыңыз'}</div>
              </div>
              
              <div className="flex gap-2">
                <CarouselPrevious className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-proitivity-green-dark bg-white text-proitivity-green-dark hover:bg-proitivity-green-light hover:text-white transition-colors" />
                <CarouselNext className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-proitivity-green-dark bg-white text-proitivity-green-dark hover:bg-proitivity-green-light hover:text-white transition-colors" />
              </div>
            </div>
          </Carousel>
          
          {/* Visual indicator for mobile swipe */}
          <div className="flex justify-center mt-2 md:hidden">
            <div className="flex gap-1.5">
              {[...Array(4)].map((_, i) => (
                <div 
                  key={i} 
                  className={`h-2 rounded-full ${i === 0 ? 'w-4 bg-proitivity-green-dark' : 'w-2 bg-proitivity-neutral-medium'}`} 
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
