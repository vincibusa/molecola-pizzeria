import { useState, useEffect } from "react";
import i18n from "../i18n"; // assicurati che il percorso sia corretto

interface Language {
  code: string;
  name: string;
  flag: string;
}

const LanguageSelector: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedLang, setSelectedLang] = useState<string>(
    localStorage.getItem("selectedLanguage") || "it"
  );

  const languages: Language[] = [
    { code: "en", name: "English", flag: "https://flagcdn.com/w640/gb.png" },
    { code: "it", name: "Italian", flag: "https://flagcdn.com/w640/it.png" },
    { code: "es", name: "Spanish", flag: "https://flagcdn.com/w640/es.png" },
    { code: "fr", name: "French", flag: "https://flagcdn.com/w640/fr.png" },
    { code: "de", name: "German", flag: "https://flagcdn.com/w640/de.png" },
  ];

  useEffect(() => {
    localStorage.setItem("selectedLanguage", selectedLang);
  }, [selectedLang]);

  const handleLanguageChange = (langCode: string): void => {
    setSelectedLang(langCode);
    i18n.changeLanguage(langCode); // Cambia la lingua in i18next
    setIsOpen(false);
  };

  const currentLang = languages.find((lang) => lang.code === selectedLang);

  return (
    <div className="fixed bottom-8 left-8 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        aria-label="Open language selector"
      >
        {currentLang ? (
          <img
            src={currentLang.flag}
            alt={`${currentLang.name} flag`}
            className="w-full h-full object-cover rounded-full"
            onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
              (e.target as HTMLImageElement).src =
                "https://via.placeholder.com/32x32.png?text=Flag";
            }}
          />
        ) : (
          <span>Lang</span>
        )}
      </button>

      <div
        className={`absolute bottom-16 right-0 transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="bg-white rounded-full p-2 shadow-xl">
          <div className="flex flex-col gap-2">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`group relative flex items-center justify-center p-2 rounded-full hover:bg-gray-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                  selectedLang === lang.code ? "bg-gray-100" : ""
                }`}
                aria-label={`Select ${lang.name}`}
              >
                <div className="w-8 h-8 rounded-full overflow-hidden">
                  <img
                    src={lang.flag}
                    alt={`${lang.name} flag`}
                    className="w-full h-full object-cover"
                    onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                      (e.target as HTMLImageElement).src =
                        "https://via.placeholder.com/32x32.png?text=Flag";
                    }}
                  />
                </div>
                <span className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap">
                  {lang.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;