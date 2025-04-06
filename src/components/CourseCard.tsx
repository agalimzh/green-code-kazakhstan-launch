
import { Clock, Users, Award } from 'lucide-react';
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
  return (
    <Card className="card-hover overflow-hidden border border-proitivity-neutral-medium">
      {popular && (
        <div className="absolute top-4 right-4 bg-proitivity-green-dark text-white text-xs font-semibold px-3 py-1 rounded-full">
          Популярный
        </div>
      )}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardHeader className="pb-2">
        <h3 className="text-xl font-semibold text-proitivity-green-dark">{title}</h3>
      </CardHeader>
      <CardContent className="pb-4">
        <p className="text-proitivity-neutral-dark mb-4">{description}</p>
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
      <CardFooter className="flex justify-between items-center border-t border-proitivity-neutral-medium pt-4">
        <div className="font-bold text-lg">{price}</div>
        <Button className="bg-proitivity-green-dark hover:bg-proitivity-green-light text-white">
          {ctaText}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
