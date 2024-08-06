import React, { useState } from 'react'
import { useTranslation } from '../../hooks/useStranslations';

interface ISavedValuesProps {
    currentValue: string
    onClearAll: () => void;
}

const SavedValues: React.FC<ISavedValuesProps> = ({ onClearAll, currentValue }) => {
    const { t } = useTranslation();
    const [savedValues, setSavedValues] = useState<string[]>([]);
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

    const addValue = () => {
        console.log('add value calling')
        if (currentValue && !savedValues.includes(currentValue)) {
            setSavedValues(prev => [...prev, currentValue]);
        }
    };

    const copyToClipboard = (value: string, index: number) => {
        navigator.clipboard.writeText(value).then(() => {
            setCopiedIndex(index);
            setTimeout(() => setCopiedIndex(null), 2000);
        });
        console.log(value)
    };

    const clearAllValues = () => {
        setSavedValues([]);
        onClearAll();
    };

    return (
        <div className="mt-2 bg-gray-100 dark:bg-gray-700 p-2 sm:p-4 rounded-lg flex flex-col h-48 sm:h-64">
            <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 text-gray-800 dark:text-white">{t('savedValues')}</h3>
            <div className="flex-grow overflow-y-auto mb-1 sm:mb-2">
                {savedValues.length === 0 ? (
                    <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">{t('noSavedValues')}</p>
                ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 sm:gap-2">
                        {savedValues.map((value, index) => (
                            <button
                                key={index}
                                onClick={() => copyToClipboard(value, index)}
                                className="ml-1 sm:ml-2 px-1 sm:px-2 py-0.5 sm:py-1 bg-blue-500 text-white rounded text-xs sm:text-sm hover:bg-blue-600 transition-colors flex-shrink-0"
                            >
                                {copiedIndex === index ? t('copied') : value}
                            </button>
                        ))}
                    </div>
                )}
            </div>
            <div className="flex justify-between mt-1 sm:mt-2 gap-1 flex-col">
                <button
                    onClick={addValue}
                    className="px-2 sm:px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition-colors text-xs sm:text-sm"
                >
                    {t('addCurrentValue')}
                </button>
                <button
                    onClick={clearAllValues}
                    className="px-2 sm:px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors text-xs sm:text-sm"
                >
                    {t('clearAll')}
                </button>
            </div>
        </div>
    )
}

export default SavedValues
