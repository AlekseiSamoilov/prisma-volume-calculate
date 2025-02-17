import React from "react";

interface IInputProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    placeholder: string;
}

const Input: React.FC<IInputProps> = ({ label, value, onChange, placeholder }) => {
    const id = React.useMemo(() => `input-${label.toLowerCase().replace(/\s+/g, '-')}`, [label]);

    return (
        <div className="mb-4">
            <label
                htmlFor={id}
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {label}
            </label>
            <input
                id={id}
                data-testid='input'
                type="number"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                aria-label={label}
                aria-required="true"
                min="0"
                step="any"
                className="w-full px-3 py-2 border-grey-300 dark:border-gray-600 rounded-xl 
                text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 
                focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 
                transition-colors duration-300"
            />

        </div>
    );
};

export default Input;