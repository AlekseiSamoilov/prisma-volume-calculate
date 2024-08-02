import React, { createContext, useState, ReactNode } from "react";

type TLanguage = 'en' | 'ru';

type TTranslationKey = 'title' | 'height' | 'topArea' | 'bottomArea' | 'calculate' | 'volume' |
    'enterHeight' | 'enterTopArea' | 'enterBottomArea' | 'cubicUnits' | 'lightTheme' | 'darkTheme' | 'errorInvalidInput';


type TTranslations = {
    [key in TLanguage]: {
        [key in TTranslationKey]: string;
    };
};


export interface ILangugeContextType {
    language: TLanguage;
    setLanguage: (lang: TLanguage) => void;
    t: (key: TTranslationKey) => string;
}

export const LanguageContext = createContext<ILangugeContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<TLanguage>('ru');

    const t = (key: TTranslationKey): string => {
        return translation[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

const translation: TTranslations = {
    en: {
        'title': 'Truncated Prism Volume Calculator',
        'height': 'Height',
        'topArea': 'Top Base Area',
        'bottomArea': 'Bottom Base Area',
        'calculate': 'Calculate',
        'volume': 'Volume',
        'enterHeight': 'Enter height',
        'enterTopArea': 'Enter top area',
        'enterBottomArea': 'Enter bottom area',
        'cubicUnits': 'cubic units',
        'lightTheme': 'Light Theme',
        'darkTheme': 'Dark Theme',
        'errorInvalidInput': 'Please enter valid numeric values. Use dot or comma as decimal separator.',
    },
    ru: {
        'title': 'Калькулятор объема усеченной призмы',
        'height': 'Высота',
        'topArea': 'Площадь верхнего основания',
        'bottomArea': 'Площадь нижнего основания',
        'calculate': 'Рассчитать',
        'volume': 'Объем',
        'enterHeight': 'Введите высоту',
        'enterTopArea': 'Введите площадь верха',
        'enterBottomArea': 'Введите площадь низа',
        'cubicUnits': 'кубических единиц',
        'lightTheme': 'Светлая тема',
        'darkTheme': 'Темная тема',
        'errorInvalidInput': 'Пожалуйста, введите корректные числовые значения. Используйте точку или запятую в качестве разделителя десятичных дробей.'
    }
};