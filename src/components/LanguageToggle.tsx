
import { Button } from '@/components/ui/button';

interface LanguageToggleProps {
  onChange: (lang: 'ru' | 'kz') => void;
  currentLang: 'ru' | 'kz';
}

const LanguageToggle = ({ onChange, currentLang }: LanguageToggleProps) => {
  return (
    <div className="flex rounded-full overflow-hidden border border-proitivity-green-dark">
      <Button
        variant={currentLang === 'ru' ? 'default' : 'ghost'}
        className={`px-4 py-1 text-sm transition-all rounded-full ${
          currentLang === 'ru' 
            ? 'bg-proitivity-green-dark text-white' 
            : 'bg-transparent text-proitivity-green-dark hover:text-proitivity-green-dark hover:bg-proitivity-blue-light/50'
        }`}
        onClick={() => onChange('ru')}
      >
        RU
      </Button>
      <Button
        variant={currentLang === 'kz' ? 'default' : 'ghost'}
        className={`px-4 py-1 text-sm transition-all rounded-full ${
          currentLang === 'kz' 
            ? 'bg-proitivity-green-dark text-white' 
            : 'bg-transparent text-proitivity-green-dark hover:text-proitivity-green-dark hover:bg-proitivity-blue-light/50'
        }`}
        onClick={() => onChange('kz')}
      >
        KZ
      </Button>
    </div>
  );
};

export default LanguageToggle;
