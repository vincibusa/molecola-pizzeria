import React, { useEffect, useState } from "react";
import { FaCookie } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
}

const CookieConsentModal: React.FC = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // Lo state per le preferenze viene usato solo per salvare il consenso nel localStorage.
  const [, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsOpen(true);
    }
  }, []);

  const handleAcceptAll = (): void => {
    const newPreferences: CookiePreferences = {
      essential: true,
      analytics: true,
      marketing: true,
    };
    setPreferences(newPreferences);
    localStorage.setItem("cookieConsent", JSON.stringify(newPreferences));
    setIsOpen(false);
  };

  const handleRejectNonEssential = (): void => {
    const newPreferences: CookiePreferences = {
      essential: true,
      analytics: false,
      marketing: false,
    };
    setPreferences(newPreferences);
    localStorage.setItem("cookieConsent", JSON.stringify(newPreferences));
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed sm:bottom-4 sm:right-4 bottom-0 left-0 sm:left-auto sm:max-w-md w-full bg-card p-4 rounded-lg shadow-lg z-50">
      <div className="flex flex-col gap-4">
        <div className="flex items-start gap-3">
          <FaCookie className="text-primary text-xl flex-shrink-0" />
          <p className="text-sm text-foreground">
            {t("cookieConsent.text")}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 w-full">
          <button
            onClick={handleAcceptAll}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm hover:bg-primary/90 transition-colors w-full sm:w-auto"
          >
            {t("cookieConsent.acceptAll")}
          </button>
          <button
            onClick={handleRejectNonEssential}
            className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm hover:bg-secondary/90 transition-colors w-full sm:w-auto"
          >
            {t("cookieConsent.acceptEssential")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsentModal;