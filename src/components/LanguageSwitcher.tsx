import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = React.useState(false);

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        document.dir = lng === 'he' ? 'rtl' : 'ltr';
        document.documentElement.lang = lng;
        setIsOpen(false);
    };

    useEffect(() => {
        document.dir = i18n.language === 'he' ? 'rtl' : 'ltr';
        document.documentElement.lang = i18n.language;
    }, [i18n.language]);

    const languages = [
        { code: 'en', label: 'EN' },
        { code: 'he', label: 'HE' },
        { code: 'ru', label: 'RU' }
    ];

    return (
        <div className="fixed top-4 left-4 z-50 flex flex-col gap-2">
            <div className="md:hidden relative">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="bg-[var(--neon-green)] p-2 zero-radius border-2 border-black shadow-[4px_4px_0px_black] active:translate-y-1 active:shadow-none transition-all"
                    aria-label="Change Language"
                >
                    <Globe className="w-6 h-6" />
                </button>
                {/* Mobile Dropdown */}
                {isOpen && (
                    <div className="absolute top-full left-0 mt-2 flex flex-col gap-2 animate-in fade-in zoom-in duration-200">
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => changeLanguage(lang.code)}
                                className={`
                                    py-2 px-4 font-exo font-bold text-sm 
                                    zero-radius border-2 border-black shadow-[4px_4px_0px_black]
                                    transition-all active:scale-95
                                    ${i18n.language === lang.code
                                        ? 'bg-[var(--neon-yellow)]'
                                        : 'bg-white hover:bg-[var(--neon-blue)] hover:text-white'}
                                `}
                            >
                                {lang.label}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            <div className="hidden md:flex flex-col gap-3">
                {languages.map((lang) => (
                    <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className={`
              w-12 h-12 flex items-center justify-center
              font-exo font-bold text-lg
              zero-radius border-4 border-black transition-all duration-200
              hover:scale-110 active:scale-95
              shadow-[4px_4px_0px_rgba(0,0,0,1)]
              ${i18n.language === lang.code
                                ? 'bg-[var(--neon-green)] translate-x-1'
                                : 'bg-white hover:bg-[var(--neon-blue)] hover:text-white'}
            `}
                    >
                        {lang.label}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default LanguageSwitcher;
