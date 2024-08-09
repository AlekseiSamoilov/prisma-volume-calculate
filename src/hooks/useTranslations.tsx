import { useContext } from "react";
import { LanguageContext } from "../components/LanguageContext/LanguageContext";

export const useTranslation = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useTranslation must be used within LanguageProvider');
    }
    return context;
}