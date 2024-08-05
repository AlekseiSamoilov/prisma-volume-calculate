import { useCalculator } from "../../hooks/useCalculator"
import { useTranslation } from "../../hooks/useStranslations";
import Button from "../Button/Button";

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

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-xl w-full max-w[95%] sm:max-w-[90%] md:max-w-2xl lg:max-w-3xl">
                <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-500 dark:text-gray-300">{t('calculator')}</h2>
                </div>
                <div className="p-6 sm:p-6">
                    <input
                        type="text"
                        value={result}
                        readOnly
                        className="w-full mb-4 p-3 sm:p-4 text-right text-2xl sm:text-3xl border rounded bg-gray-100 dark:bg-gray-700 dark:text-white"
                    />
                    <div className=" grid grid-cols-4 gap-2 sm:gap-3 text-gray-700 dark:text-gray-100">
                        {buttons.map((btn) => (
                            <button
                                key={btn}
                                onClick={() => handleButtonClick(btn)}
                                className="bg-gray-200 dark:bg-gray-600 p-3 sm:p-4 rounded sm:text-2xl font-simibold hover:bg-blue-200 active:bg-blue-400 dark:hover:bg-blue-700 dark:active:bg-blue-800 transition-colors"
                            >{btn}</button>
                        ))}
                    </div>

                </div>
                <Button onClick={closeCalculator} className="flex-1 min-w-[30%] bg-red-500 hover:bg-red-600 active:bg-red-700">{t('close')}</Button>
            </div>
        </div>
    );
};

export default Calculator;