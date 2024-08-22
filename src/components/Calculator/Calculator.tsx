import { useState } from "react";
import { useCalculator } from "../../hooks/useCalculator"
import { useTranslation } from "../../hooks/useTranslations";
import Button from "../Button/Button";

const MAX_INPUT_LENGTH = 12;
const MAX_SAVED_VALUES = 10;

const Calculator: React.FC = () => {
    const { isOpen, closeCalculator, result, updateResult } = useCalculator();
    const { t } = useTranslation();
    const [savedValues, setSavedValues] = useState<string[]>([]);
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

    if (!isOpen) return null;

    const handleButtonClick = (value: string) => {
        switch (value) {
            case '=':
                try {
                    const evalResult = eval(result).toString();
                    updateResult(evalResult.slice(0, MAX_INPUT_LENGTH));
                } catch (err) {
                    updateResult('Error lol');
                }
                break;
            case 'C':
                updateResult('');
                break;
            case 'M+':
                addValue();
                break;
            case 'M-':
                clearAllValues();
                break;
            case '<-':
                updateResult(result.slice(0, -1));
                break;
            default:
                if (result.length < MAX_INPUT_LENGTH) {
                    updateResult(result + value);
                }
        }
    };

    const buttons = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+', 'C', 'M+', 'M-', '<-'];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        if (newValue.length <= MAX_INPUT_LENGTH) {
            updateResult(newValue);
        }
    };

    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
        e.preventDefault();
        const pastedText = e.clipboardData.getData('text');
        const newValue = result + pastedText;
        updateResult(newValue.slice(0, MAX_INPUT_LENGTH));
    }

    const copyToClipboard = (value: string, index: number) => {
        navigator.clipboard.writeText(value).then(() => {
            setCopiedIndex(index);
            setTimeout(() => setCopiedIndex(null), 2000);
        });
    };

    const addValue = () => {
        if (result && !savedValues.includes(result)) {
            setSavedValues(prev => {
                if (prev.length >= MAX_SAVED_VALUES) {
                    return [...prev.slice(1), result];
                } else {
                    return [...prev, result];
                }
            });
        }
    };

    const clearAllValues = () => {
        setSavedValues([]);
    };

    return (
        <div className="max-w-[100%] fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-2 sm:p-4">
            <div data-testid="calculator" className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w[95%] sm:max-w-[90%] md:max-w-2xl lg:max-w-3xl max-h-[95vh]">
                <div className="p-6 sm:p-6">
                    <input
                        type="text"
                        value={result}
                        onChange={handleInputChange}
                        onPaste={handlePaste}
                        maxLength={MAX_INPUT_LENGTH}
                        className="w-full mb-4 p-3 sm:p-4 text-right text-2xl sm:text-3xl border rounded-xl bg-gray-100 dark:bg-gray-700 dark:text-white"
                    />
                    <div className="grid grid-cols-4 gap-2 sm:gap-3 text-gray-700 dark:text-gray-100">
                        {buttons.map((btn) => (
                            <button
                                key={btn}
                                onClick={() => handleButtonClick(btn)}
                                className="bg-gray-200 dark:bg-gray-600 p-2 sm:p-3 rounded-xl text-lg sm:text-xl font-simibold hover:bg-blue-200 active:bg-blue-400 dark:hover:bg-blue-700 dark:active:bg-blue-800 transition-colors"
                            >{btn}</button>
                        ))}
                    </div>
                    <div className="pt-4 flex-grow overflow-y-auto mb-1 sm:mb-2">
                        {savedValues.length === 0 ? (
                            <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">{t('noSavedValues')}</p>
                        ) : (
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2">
                                {savedValues.map((value, index) => (
                                    <button
                                        key={index}
                                        onClick={() => copyToClipboard(value, index)}
                                        className="ml-1 sm:ml-2 px-1 sm:px-2 py-2 sm:py-2 bg-blue-500 text-white rounded-xl text-xs sm:text-sm hover:bg-blue-600 transition-colors flex-shrink-0"
                                    >
                                        {copiedIndex === index ? t('copied') : value}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                    <Button onClick={closeCalculator} className="rounded flex-1 min-w-[30%] bg-red-500 hover:bg-red-600 active:bg-red-700">{t('close')}</Button>
                </div>
            </div>
        </div>
    );
};

export default Calculator;