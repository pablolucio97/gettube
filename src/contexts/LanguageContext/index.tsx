import { createContext, ReactNode, useState } from 'react'

interface LanguageContextProps {
    language: string;
    toggleLanguage: () => string;
}

interface ChildrenProps {
    children: ReactNode;
}

export const LanguageContext = createContext({} as LanguageContextProps)

export const LanguageProvider = ({ children }: ChildrenProps) => {

    const [language, setLanguage] = useState('english')

    function toggleLanguage(): string {
        language === 'english' ? setLanguage('portuguese') : setLanguage('english')
        return language
    }

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}