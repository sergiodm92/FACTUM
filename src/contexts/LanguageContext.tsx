import React, { createContext, useState, useContext } from 'react';
import translations from '../translations';

// Define the available languages
type Language = 'es' | 'en' | 'fr';

// Define a type for the translation keys
type TranslationKeys = keyof typeof translations[Language];

// Define the type for the translation function
type TFunction = (key: TranslationKeys) => string;  

// Define the context type
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TFunction; 
}

// Create the LanguageContext with an initial value of undefined
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Define the LanguageProvider component
export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

  // Translation function with type assertion
  const t: TFunction = (key) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook for using the LanguageContext
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
