import { useEffect, useState } from 'react'

export const useUserLanguage = () => {
  const [userLanguage, setUserLanguage] = useState("en");

  useEffect(() => {
    const language = navigator?.language || "en";
    if (language.toLowerCase().startsWith("es")) {
      setUserLanguage("es");
    } else {
      setUserLanguage("en");
    }
  }, []);
  return userLanguage;
}
