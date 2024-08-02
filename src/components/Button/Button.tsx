import React from "react";

interface iButtonProps {
    onClick: () => void;
    children: React.ReactNode;
}

const Button: React.FC<iButtonProps> = ({ onClick, children }) => {
    return (
        <button
            onClick={onClick}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-xl
            focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50
            transition-colors duration-300">{children}</button>
    );
};

export default Button