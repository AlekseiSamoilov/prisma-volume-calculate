import { useContext } from "react"
import { CalculatorContext } from "../components/CalculatorContext/CalculatorContext"

export const useCalculator = () => {
    const context = useContext(CalculatorContext);
    if (context === undefined) {
        throw new Error('useCalculator must be used within a CaculatorProvider');
    }
    return context;
}