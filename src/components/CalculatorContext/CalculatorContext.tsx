import React, { createContext, useState } from "react";

export interface ICalculatorContextType {
    isOpen: boolean;
    openCalculator: () => void;
    closeCalculator: () => void;
    result: string;
    updateResult: (value: string) => void;
}

export const CalculatorContext = createContext<ICalculatorContextType | undefined>(undefined);

export const CalculatorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [result, setResult] = useState('');

    const openCalculator = () => setIsOpen(true);
    const closeCalculator = () => setIsOpen(false);
    const updateResult = (value: string) => setResult(value);

    return (
        <CalculatorContext.Provider value={{ isOpen, openCalculator, closeCalculator, result, updateResult }}>
            {children}
        </CalculatorContext.Provider>
    )
}