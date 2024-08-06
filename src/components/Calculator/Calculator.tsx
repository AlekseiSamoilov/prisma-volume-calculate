import { useCalculator } from "../../hooks/useCalculator"
import { useTranslation } from "../../hooks/useStranslations";
import Button from "../Button/Button";
import SavedValues from "../SavedValues/SavedValues";

const Calculator: React.FC = () => {
    const { isOpen, closeCalculator, result, updateResult } = useCalculator();
    const { t } = useTranslation();

    if (!isOpen) return null;

    const handleButtonClick = (value: string) => {
        if (value === '=') {
            try {
                updateResult(eval(result).toString());
            } catch (error) {
                updateResult('Error');
            }
        } else if (value === 'C') {
            updateResult('');
        } else {
            updateResult(result + value);
        }
    };
    const buttons = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+', 'C'];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        updateResult(e.target.value);
    };

    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
        e.preventDefault();
        const pastedText = e.clipboardData.getData('text');
        updateResult(result + pastedText);
    }

    return (
        <div className="max-w-[100%] fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-2 sm:p-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w[95%] sm:max-w-[90%] md:max-w-2xl lg:max-w-3xl max-h-[95vh]">
                <div className="p-6 sm:p-6">
                    <input
                        type="text"
                        value={result}
                        onChange={handleInputChange}
                        onPaste={handlePaste}
                        className="w-full mb-4 p-3 sm:p-4 text-right text-2xl sm:text-3xl border rounded bg-gray-100 dark:bg-gray-700 dark:text-white"
                    />
                    <div className=" grid grid-cols-4 gap-2 sm:gap-3 text-gray-700 dark:text-gray-100">
                        {buttons.map((btn) => (
                            <button
                                key={btn}
                                onClick={() => handleButtonClick(btn)}
                                className="bg-gray-200 dark:bg-gray-600 p-2 sm:p-3 rounded text-lg sm:text-xl font-simibold hover:bg-blue-200 active:bg-blue-400 dark:hover:bg-blue-700 dark:active:bg-blue-800 transition-colors"
                            >{btn}</button>
                        ))}
                    </div>
                    <SavedValues currentValue={result} onClearAll={() => updateResult('')} />
                    <Button onClick={closeCalculator} className="flex-1 min-w-[30%] bg-red-500 hover:bg-red-600 active:bg-red-700">{t('close')}</Button>
                </div>
            </div>
        </div>
    );
};

export default Calculator;