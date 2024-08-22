
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import Input from "./Input";


describe('Input component', () => {
    test('renders input correctly', () => {
        render(<Input onChange={() => { }} label='' placeholder='' value='' />);
        expect(screen.getByTestId('input')).toBeInTheDocument();
    });

    test('renders input correct with label', () => {
        render(<Input onChange={() => { }} label='Input' placeholder='' value='' />);
        expect(screen.getByText('Input')).toBeInTheDocument();
    });

    test('renders input correct with placeholder', () => {
        render(<Input onChange={() => { }} label='' placeholder='Input' value='' />);
        expect(screen.getByPlaceholderText('Input')).toBeInTheDocument();
    });

    test('renders input correctly with value', () => {
        render(<Input onChange={() => { }} label='' placeholder='Input' value='' />);
        const inputElement = screen.getByPlaceholderText('Input');
        fireEvent.change(inputElement, { target: { value: '123' } });
        console.log(inputElement)
        expect(inputElement).toHaveValue('123');
    });
})