import React from "react";

interface IInputProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    placeholder: string;
}

const Input: React.FC<IInputProps> = ({ label, value, onChange, placeholder }) => {

    return (
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {label}
            </label>
            <input
                type="number"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className="w-full px-3 py-2 border-grey-300 dark:border-gray-600 rounded-xl text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors duration-300" />

        </div>
    );
};

export default Input;