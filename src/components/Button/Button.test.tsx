import Button from "./Button"
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';

describe('Button component', () => {
    test('renders button with correct text', () => {
        render(<Button onClick={() => { }}>Click me</Button>);
        expect(screen.getByText('Click me')).toBeInTheDocument();
    });

    test('call OnClick prop when clicked', () => {
        const handleClick = jest.fn();
        render(<Button onClick={handleClick}>Click me</Button>);
        fireEvent.click(screen.getByText('Click me'));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    test('applies default classes', () => {
        render(<Button onClick={() => { }}>Click me</Button>);
        const button = screen.getByRole('button');
        expect(button).toHaveClass('bg-blue-500');
        expect(button).toHaveClass('hover:bg-blue-600');
    });
})
