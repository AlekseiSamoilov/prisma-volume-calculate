import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from "./Calculator";
import '@testing-library/jest-dom';

jest.mock('../../hooks/useCalculator', () => ({
    useCalculator: () => ({
        isOpen: true,
        closeCalculator: jest.fn(),
        result: '',
        updateResult: jest.fn(),
    }),
}));

jest.mock('../../hooks/useTranslation', () => ({
    useTranslation: () => ({
        t: (key: any) => key,
    }),
}));

describe('Calculator Component', () => {
    test('renders calculator when isOpen is true', () => {
        render(<Calculator />);
        const calculator = screen.getByRole('textbox')
        expect(calculator).toBeInTheDocument();
    });
    test('handle number button click', () => {
        const { useCalculator } = require('../../hooks/useCalculator');
        const mockUpdateResult = jest.fn();
        useCalculator.mockReturnValue({
            isOpen: true,
            closeCalculator: jest.fn(),
            result: '',
            updateResult: mockUpdateResult,
        });

        render(<Calculator />);
        fireEvent.click(screen.getByText('1'));
        expect(mockUpdateResult).toHaveBeenCalledWith('1');
    });

})