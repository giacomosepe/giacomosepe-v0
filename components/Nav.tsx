"use client";

import Link from "next/link";
import { LanguageToggle } from "@/components/language-toggle";
import { useLanguage } from "@/lib/language-context";

export default function Nav() {
  const { t } = useLanguage();

  return (
    <nav className="not-prose border-b border-border">
      <div className="py-4">
        <div className="flex flex-col gap-3">
          {/* First row: Title and menu items */}
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="text-xl md:text-2xl font-semibold text-foreground hover:text-[#003BB4] transition-colors"
            >
              Giacomo Sepe
            </Link>
            <div className="flex items-center gap-4 md:gap-6">
              <Link
                href="/contact"
                className="text-base md:text-sm text-muted-foreground hover:text-[#003BB4] hover:font-bold transition-all"
              >
                {t("chat")}
              </Link>
              <a
                href="https://giacomosepe.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base md:text-sm text-muted-foreground hover:text-[#003BB4] hover:font-bold transition-all"
              >
                {t("substack")}
              </a>
              {/* Language toggle visible only on desktop */}
              <div className="hidden md:block">
                <LanguageToggle />
              </div>
            </div>
          </div>
          {/* Second row: Language toggle centered on mobile only */}
          <div className="flex md:hidden justify-center">
            <LanguageToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
