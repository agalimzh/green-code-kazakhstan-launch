
import { Clock, Users, Award, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

interface CourseCardProps {
  title: string;
  description: string;
  duration: string;
  price: string;
  image: string;
  ctaText: string;
  popular?: boolean;
}

const CourseCard = ({ 
  title, 
  description, 
  duration, 
  price, 
  image, 
  ctaText,
  popular = false 
}: CourseCardProps) => {
  // Updated Google Drive syllabus link
  const syllabusLink = "https://drive.google.com/file/d/1OkAAVbrZjE6IZIZj8VB9HRGprzmUNMHp/view";
  
  const handleCTAClick = () => {
    // Open syllabus in a new tab
    window.open(syllabusLink, '_blank');
  };
  
  const handleSignUpClick = () => {
    // Scroll to contact form when clicking on enroll button
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <Card className="overflow-hidden border border-proitivity-neutral-medium/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 group relative">
      {popular && (
        <div className="absolute top-4 right-4 z-20 bg-proitivity-green-dark text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md flex items-center space-x-1">
          <Star className="w-3 h-3 mr-1" />
          <span>{popular ? 'Популярный' : 'Popular'}</span>
        </div>
      )}
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-proitivity-green-dark/20 z-[1] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <CardHeader className="pb-2">
        <h3 className="text-xl font-semibold text-proitivity-green-dark group-hover:text-gradient transition-all duration-300">{title}</h3>
      </CardHeader>
      <CardContent className="pb-4">
        <p className="text-proitivity-neutral-dark mb-4 line-clamp-3">{description}</p>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-sm text-proitivity-neutral-dark">
            <Clock size={16} className="text-proitivity-green-light" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-proitivity-neutral-dark">
            <Award size={16} className="text-proitivity-green-light" />
            <span>Сертификат по окончанию</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-proitivity-neutral-dark">
            <Users size={16} className="text-proitivity-green-light" />
            <span>Онлайн и оффлайн</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center border-t border-proitivity-neutral-medium/50 pt-4 bg-proitivity-neutral-light/30 group-hover:bg-proitivity-blue-light/20 transition-colors duration-300">
        <div className="font-bold text-lg">{price}</div>
        <div className="space-x-2">
          <Button 
            variant="outline"
            className="border-proitivity-green-dark text-proitivity-green-dark hover:bg-proitivity-green-light hover:text-white transition-all duration-300"
            onClick={handleCTAClick}
          >
            {ctaText}
          </Button>
          <Button 
            className="bg-[#F97316] hover:bg-[#F97316]/90 text-white transition-all duration-300 relative overflow-hidden"
            onClick={handleSignUpClick}
          >
            <span className="relative z-10">Записаться</span>
            {/* Subtle pulse effect */}
            <span className="absolute inset-0 bg-white/10 opacity-0 animate-[pulse_2.5s_ease-in-out_infinite]"></span>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
