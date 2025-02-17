import React, { useState } from "react";
import { useTranslation } from "../../hooks/useTranslations";

interface iResultProps {
    value: number | null;
}

const Result: React.FC<iResultProps> = ({ value }) => {
    const { t } = useTranslation();
    const [isCopied, setIsCopied] = useState(false);

    if (value === null) return null;

    const formattedResult = value.toFixed(2);
    const resultText = `${t('volume')}: ${formattedResult} ${t('cubicUnits')}`;

    const copyToClipboard = () => {
        navigator.clipboard.writeText(value.toFixed(2)).then(() => {
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        });
    };

    return (
        <div
            role="region"
            className=" flex items-center flex-col mt-6 p-4 bg-green-100 dark:bg-green-800 rounded-xl"
            aria-label="Результат расчета"
        >
            <p
                className="text-green-800 dark:text-green-100 font-semibold text-center"
                aria-label="polite"
            >
                {resultText}
            </p>
            <button
                onClick={copyToClipboard}
                aria-label={isCopied ? 'Значение скопировано' : 'Копировать значение'}
                className="ml-2 px-3 py-1 w-[100%] text-center mt-3 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
            >
                {isCopied ? t('copied') : t('copy')}
            </button>
        </div>
    );
};

export default Result