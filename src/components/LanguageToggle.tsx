
import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface LanguageToggleProps {
  onChange: (lang: 'ru' | 'kz') => void;
  currentLang: 'ru' | 'kz';
}

const LanguageToggle = ({ onChange, currentLang }: LanguageToggleProps) => {
  return (
    <div className="flex rounded-md overflow-hidden">
      <Button
        variant={currentLang === 'ru' ? 'default' : 'outline'}
        className={`px-3 py-1 text-sm transition-all ${
          currentLang === 'ru' 
            ? 'bg-proitivity-green-dark text-white' 
            : 'bg-transparent text-proitivity-green-dark hover:text-proitivity-green-dark'
        }`}
        onClick={() => onChange('ru')}
      >
        RU
      </Button>
      <Button
        variant={currentLang === 'kz' ? 'default' : 'outline'}
        className={`px-3 py-1 text-sm transition-all ${
          currentLang === 'kz' 
            ? 'bg-proitivity-green-dark text-white' 
            : 'bg-transparent text-proitivity-green-dark hover:text-proitivity-green-dark'
        }`}
        onClick={() => onChange('kz')}
      >
        KZ
      </Button>
    </div>
  );
};

export default LanguageToggle;
