"use client";
import { useUserLanguage } from "@/hooks/useUserLanguage";
import { createContext, useState, type ReactNode } from "react";

type LanguageContextType = {
  lang: string;
  setLang: (lang: string) => void;
  userLanguage: string;
};

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState("en");

  const userLanguage = useUserLanguage();

  return (
    <LanguageContext.Provider value={{ lang, setLang, userLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
