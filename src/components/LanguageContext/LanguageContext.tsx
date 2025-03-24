import React, { createContext, useState, ReactNode } from "react";

type TLanguage = 'en' | 'ru';

type TTranslationKey = 'title' | 'height' | 'topArea' | 'bottomArea' | 'calculate' | 'volume' |
    'enterHeight' | 'enterTopArea' | 'enterBottomArea' | 'cubicUnits' | 'lightTheme' | 'darkTheme' | 'errorInvalidInput' | 'openCalculator' | 'calculator' | 'clearAll' | 'close' | 'copy' | 'copied' | 'savedValues'
    | 'noSavedValues' | 'addCurrentValue' | 'clearAll' | 'showInstallInstructions' | 'hidenInstallInstructions' | 'installAppTitle' | 'installAppDescription'
    | 'iOSInstructionsTitle' | 'iOSStep1' | 'iOSStep2' | 'iOSStep3' | 'iOSStep4' | 'androidInstructionsTitle' | 'androidStep1' | 'androidStep2' | 'androidStep3'
    | 'otherDevicesTitle' | 'otherDevicesStep1' | 'otherDevicesStep2' | 'otherDevicesStep3' | 'offlineFeature' | 'fasterLoadingFeature'
    | 'homeScreenFeature';


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
        'errorInvalidInput': 'Please enter valid numeric values. Use dot as decimal separator.',
        'openCalculator': 'Open Calculator',
        'calculator': 'Calculator',
        'clearAll': "Clear All",
        'close': 'Close',
        'copy': 'Copy',
        'copied': 'Copied!',
        'savedValues': 'Saved Values',
        'noSavedValues': 'No saved values yet',
        'addCurrentValue': 'Add Current Value',
        'showInstallInstructions': '📲 Install this App!',
        'hidenInstallInstructions': 'Hide installation Guide',
        'installAppTitle': 'Install This App on Your Device',
        'installAppDescription': 'Install this calculator on your device to use it offline, anywhere, anytime',
        'iOSInstructionsTitle': 'Installation on iPhone/iPad:',
        'iOSStep1': 'Tap the "Share" button at the bottom of your browser.',
        'iOSStep2': 'Scroll down and tap "Add to Home Screen."',
        'iOSStep3': 'Give it a name or use suggested one.',
        'iOSStep4': 'Tap "Add" in the upper right corner.',
        'androidInstructionsTitle': 'Installation on Android:',
        'androidStep1': 'Tap the menu button (three dots) in the upper right corner.',
        'androidStep2': 'Tap "Add to Home screen" or "Install app."',
        'androidStep3': 'Follow the on-screen instructions to complete installation.',
        'otherDevicesTitle': 'Installation on Desktop:',
        'otherDevicesStep1': 'Click on the install icon in the address bar (may appear as a + icon or computer icon).',
        'otherDevicesStep2': 'Click "Install" in the popup that appears.',
        'otherDevicesStep3': 'The app will open in a new window and will be available in your start menu/dock.',
        'offlineFeature': 'Works offline',
        'fasterLoadingFeature': 'Loads faster than the website',
        'homeScreenFeature': 'Convenient access from your home screen'
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
        'cubicUnits': 'куб. единиц',
        'lightTheme': 'Светлая тема',
        'darkTheme': 'Темная тема',
        'errorInvalidInput': 'Пожалуйста, введите корректные числовые значения. Используйте точку в качестве разделителя десятичных дробей.',
        'openCalculator': 'Открыть калькулятор',
        'calculator': 'Калькулятор',
        'clearAll': 'Очистить всё',
        'close': 'Закрыть',
        'copy': 'Копировать',
        'copied': 'Скопировано!',
        'savedValues': 'Сохраненные значения',
        'noSavedValues': 'Пока нет сохраненных значений',
        'addCurrentValue': 'Добавить текущее значение',
        'showInstallInstructions': '📲 Установите приложение!',
        'hidenInstallInstructions': 'Скрыть инструкции по установке',
        'installAppTitle': 'Установите это приложение на ваше устройство',
        'installAppDescription': 'Установите калькулятор на ваше устройство для использования без интернета, в любом месте и в любое время.',
        'iOSInstructionsTitle': 'Установка на iPhone/iPad:',
        'iOSStep1': 'Нажмите кнопку "Поделиться" внизу вашего браузера.',
        'iOSStep2': 'Прокрутите вниз и выберите "Добавить на экран Домой".',
        'iOSStep3': 'Задайте имя или используйте предложенное.',
        'iOSStep4': 'Нажмите "Добавить" в правом верхнем углу.',
        'androidInstructionsTitle': 'Установка на Android:',
        'androidStep1': 'Нажмите на кнопку меню (три точки) в правом верхнем углу.',
        'androidStep2': 'Выберите "Добавить на главный экран" или "Установить приложение".',
        'androidStep3': 'Следуйте инструкциям на экране для завершения установки.',
        'otherDevicesTitle': 'Установка на компьютер:',
        'otherDevicesStep1': 'Нажмите на значок установки в адресной строке (может отображаться как значок + или значок компьютера).',
        'otherDevicesStep2': 'Нажмите "Установить" в появившемся окне.',
        'otherDevicesStep3': 'Приложение откроется в новом окне и будет доступно в вашем меню Пуск/на рабочем столе.',
        'offlineFeature': 'Работает оффлайн',
        'fasterLoadingFeature': 'Загружается быстрее, чем веб-сайт',
        'homeScreenFeature': 'Удобный доступ с главного экрана',
    }
};