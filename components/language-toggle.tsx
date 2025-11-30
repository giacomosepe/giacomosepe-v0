"use client"

import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(language === "en" ? "it" : "en")}
      className="text-base md:text-sm text-muted-foreground hover:text-[#6d0e2b] hover:font-bold transition-all h-auto p-0 hover:bg-transparent cursor-pointer"
    >
      {language === "en" ? "IT" : "EN"}
    </Button>
  )
}
