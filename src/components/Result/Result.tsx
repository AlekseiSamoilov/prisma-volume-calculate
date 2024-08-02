import React from "react";

interface iResultProps {
    value: number | null;
}

const Result: React.FC<iResultProps> = ({ value }) => {
    if (value === null) return null;

    return (
        <div className="mt-6 p-4 bg-green-100 dark:bg-green-800 rounded-xl">
            <p className="text-green-800 dark:text-green-100 font-semibold text-center">
                Value: {value.toFixed(2)} cubic meters
            </p>
        </div>
    );
};

export default Result