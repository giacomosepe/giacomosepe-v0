"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { translations, type Language } from "./translations"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: keyof typeof translations.en) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

function detectDefaultLanguage(): Language {
  // Check if we're in a browser environment
  if (typeof window === "undefined") return "en"

  // Get browser language
  const browserLang = navigator.language || (navigator.languages && navigator.languages[0])

  // If browser language starts with 'it' (Italian), default to Italian
  if (browserLang && browserLang.toLowerCase().startsWith("it")) {
    return "it"
  }

  // Default to English for all other cases
  return "en"
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(detectDefaultLanguage())

  // Load language from localStorage on mount (user preference takes precedence)
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "it")) {
      setLanguageState(savedLanguage)
    } else {
      const detectedLang = detectDefaultLanguage()
      setLanguageState(detectedLang)
      localStorage.setItem("language", detectedLang)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: keyof typeof translations.en): string => {
    return translations[language][key] || translations.en[key]
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
