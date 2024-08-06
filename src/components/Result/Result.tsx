import React, { useState } from "react";
import { useTranslation } from "../../hooks/useStranslations";

interface iResultProps {
    value: number | null;
}

const Result: React.FC<iResultProps> = ({ value }) => {
    const { t } = useTranslation();
    const [isCopied, setIsCopied] = useState(false);

    if (value === null) return null;

    const copyToClipboard = () => {
        navigator.clipboard.writeText(value.toFixed(2)).then(() => {
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        });
    };

    return (
        <div className=" flex items-center flex-col mt-6 p-4 bg-green-100 dark:bg-green-800 rounded-xl">
            <p className="text-green-800 dark:text-green-100 font-semibold text-center">
                {t('volume')}: {value.toFixed(2)} {t('cubicUnits')}
            </p>
            <button
                onClick={copyToClipboard}
                className="ml-2 px-3 py-1 w-[40%] text-center mt-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
            >
                {isCopied ? t('copied') : t('copy')}
            </button>
        </div>
    );
};

export default Result