import { useTranslation } from "../../hooks/useStranslations"

const LanguageToggle: React.FC = () => {
    const { language, setLanguage } = useTranslation();

    return (
        <button
            onClick={() => setLanguage(language === 'en' ? 'ru' : 'en')}
            className="mt-4 flex items-center justify-center w-full p-2 rounded-xl
            bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200
            hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300">
            {language === 'en' ? '🇷🇺 Русский' : '🇬🇧 English'}
        </button>
    );
};

export default LanguageToggle;