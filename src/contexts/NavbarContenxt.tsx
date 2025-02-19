import React, { createContext, useContext, useState } from "react";

interface NavbarContextType {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavbarContext = createContext<NavbarContextType | undefined>(undefined);

export const NavbarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Stato iniziale: la navbar è visibile
  const [isVisible, setIsVisible] = useState(true);

  return (
    <NavbarContext.Provider value={{ isVisible, setIsVisible }}>
      {children}
    </NavbarContext.Provider>
  );
};

export const useNavbar = (): NavbarContextType => {
  const context = useContext(NavbarContext);
  if (context === undefined) {
    throw new Error("useNavbar must be used within a NavbarProvider");
  }
  return context;
};
