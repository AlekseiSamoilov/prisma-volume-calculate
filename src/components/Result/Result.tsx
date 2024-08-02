import React from "react";
import { useTranslation } from "../../hooks/useStranslations";

interface iResultProps {
    value: number | null;
}

const Result: React.FC<iResultProps> = ({ value }) => {
    const { t } = useTranslation();
    if (value === null) return null;

    return (
        <div className="mt-6 p-4 bg-green-100 dark:bg-green-800 rounded-xl">
            <p className="text-green-800 dark:text-green-100 font-semibold text-center">
                {t('volume')}: {value.toFixed(2)} {t('cubicUnits')}
            </p>
        </div>
    );
};

export default Result