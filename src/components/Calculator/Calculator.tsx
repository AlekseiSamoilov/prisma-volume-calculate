import { useCalculator } from "../../hooks/useCalculator"
import { useTranslation } from "../../hooks/useStranslations";

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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <div className="mb-4 flex justify-between items-center">
                    <h2 className="text-xl font-bold text-gray-500 dark:text-gray-300">{t('calculator')}</h2>
                    <button onClick={closeCalculator} className="text-gray-500 hover:text-gray-700 dark:text-gray-100 dark:hover:text-gray-100 text-3xl focus:outline-none">
                        &times;
                    </button>
                </div>
                <div className="p-6">
                    <input
                        type="text"
                        value={result}
                        readOnly
                        className="w-full mb-4 p-2 text-right border rounded"
                    />
                    <div className=" grid grid-cols-4 gap-1 text-gray-700 dark:text-gray-100">
                        {buttons.map((btn) => (
                            <button
                                key={btn}
                                onClick={() => handleButtonClick(btn)}
                                className="bg-gray-200 dark:bg-gray-600 p-2 rounded hover:bg-blue-200 active:bg-blue-400 dark:hover:bg-blue-700 dark:active:bg-blue-800"
                            >{btn}</button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calculator;