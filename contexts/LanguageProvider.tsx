import { createContext, useContext, useEffect, useState } from 'react';

import { translations } from '../translations';

type LanguageType = 'el' | 'en';

type TranslationsType = {
  [key: string]: string;
};

type DefaultContextValuesType = {
  language: string;
  switchLanguage: (newLanguage: LanguageType) => void;
  translate: (key: string) => string;
};

type DataProviderPropsType = {
  children: React.ReactNode;
};

const defaultContextValues = {
  language: 'en',
  translate: () => '',
  switchLanguage: () => {},
};

const localLanguage =
  typeof window !== 'undefined' ? localStorage.getItem('language') : 'en';

const AppContext =
  createContext<DefaultContextValuesType>(defaultContextValues);

const LanguageProvider = ({ children }: DataProviderPropsType) => {
  const [language, setLanguage] = useState<LanguageType>('el');
  const translation: TranslationsType = translations[language || 'el'];

  useEffect(() => {
    if (localLanguage !== null) {
      setLanguage(localLanguage as LanguageType);
    }
  }, []);

  const switchLanguage = (newLanguage: LanguageType) => {
    if (newLanguage !== language) {
      localStorage.setItem('language', newLanguage);
    }

    setLanguage(newLanguage);
  };

  const translate = (key: string) => {
    return translation?.[key] || '';
  };

  const valuesObject: {
    language: LanguageType;
    switchLanguage: (newLanguage: LanguageType) => void;
    translate: (key: string) => string;
  } = {
    language,
    switchLanguage,
    translate,
  };

  return (
    <AppContext.Provider value={valuesObject}>{children}</AppContext.Provider>
  );
};

const useLanguageContext = () => {
  return useContext(AppContext);
};

export { LanguageProvider, useLanguageContext };
