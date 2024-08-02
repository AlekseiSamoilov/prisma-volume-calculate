import React from "react";

interface IThemeToggleProps {
    isDarkMode: boolean;
    toggleTheme: () => void;
}

const ThemeToggle: React.FC<IThemeToggleProps> = ({ isDarkMode, toggleTheme }) => {
    return (
        <button
            onClick={toggleTheme}
            className="mt-6 flex items-center justify-center w-full p-2 rounded-xl
            bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200
            hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300">
            {isDarkMode ? '☀️ Light mode' : '🌙 Dark mode'}
        </button>
    );
};

export default ThemeToggle
