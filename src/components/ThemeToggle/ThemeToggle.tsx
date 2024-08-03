import React from "react";
import { useTranslation } from "../../hooks/useStranslations";

interface IThemeToggleProps {
    isDarkMode: boolean;
    toggleTheme: () => void;
}

const ThemeToggle: React.FC<IThemeToggleProps> = ({ isDarkMode, toggleTheme }) => {
    const { t } = useTranslation();

    return (
        <button
            onClick={toggleTheme}
            className="mt-2 flex items-center justify-center w-full p-2 rounded-xl
            bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200
            hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300">
            {isDarkMode ? `☀️ ${t('lightTheme')}` : `🌙 ${t('darkTheme')}`}
        </button>
    );
};

export default ThemeToggle
