"use client";

import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button, buttonVariants } from "@/components/ui/button";
import { useLanguage } from "@/lib/language-context";

import Nav from "@/components/Nav";
import Foot from "@/components/Foot";

import { FAQSchema } from "@/components/seo/FAQSchema";
import { ServiceSchema } from "@/components/seo/ServiceSchema";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <FAQSchema />
      <ServiceSchema />

      {/* Main Content */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {/* Left Column - Profile Picture (1/3) */}
        <div className="md:col-span-1 space-y-3 md:space-y-6">
          <Avatar className="w-48 h-48 border-2 border-border">
            <AvatarImage
              src="/images/giacomo-sepe-picture.png"
              // src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GiacomoSepe%20-%20smile%20-%20CircleBG%20red-SznDUczgMuV0GGWFk6K1cmsbCL7WYg.png"
              alt="Giacomo Sepe - Operations Specialist"
            />
            <AvatarFallback className="text-4xl bg-secondary text-secondary-foreground">
              GS
            </AvatarFallback>
          </Avatar>

          <div>
            <p className="text-xl md:text-2xl font-medium text-foreground">
              {t("title")}
            </p>
          </div>

          <div className="pt-4 hidden md:block">
            <p className="text-base md:text-sm text-[#4A5568] leading-relaxed italic">
              {t("background")}
            </p>
          </div>

          <div className="hidden md:flex items-center gap-3 pt-2">
            <a
              href="https://github.com/giacomosepe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-200"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/giacomosepe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Right Column - Bio (2/3) */}
        <div className="md:col-span-2 space-y-6">
          <div className="space-y-4 text-lg md:text-base text-foreground leading-relaxed">
            <h1 className="text-4xl md:text-6xl font-semibold mb-8">
              Giacomo Sepe
            </h1>
            <p>{t("intro")}</p>
            <p>{t("approach")}</p>
            <p>{t("dayToDay")}</p>
            <p>{t("result")}</p>
            <p>{t("track")}</p>

            <Link href="/contact">
              <Button className="cursor-pointer mt-8 mb-4" variant="outline">
                {t("openTo")}
              </Button>
            </Link>
          </div>

          <div className="pt-4 block md:hidden">
            <p className="text-base md:text-sm text-[#4A5568] leading-relaxed italic">
              {t("background")}
            </p>
          </div>

          <div className="flex md:hidden items-center gap-3 pt-2 pb-4">
            <a
              href="https://github.com/giacomosepe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-200"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/giacomosepe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          <div className="pt-6 border-t border-border">
            <h2 className="text-xl md:text-lg font-semibold mb-3">
              {t("completedWork")}
            </h2>
            <div className="space-y-3 text-base md:text-sm text-foreground leading-relaxed">
              <p>
                <strong>{t("ipeHolding")}</strong> {t("ipeHoldingDesc")}
              </p>
              <p>
                <strong>{t("picciotto")}</strong> {t("picciottoDesc")}
              </p>
              <p>
                <strong>{t("simmetrico")}</strong> {t("simmetricoDesc")}
              </p>
              {/*<p>
                <strong>{t("otherWork")}</strong> {t("otherWorkDesc")}
              </p>*/}
              <p>
                <strong>{t("eqvalue")}</strong> {t("eqvalueDesc")}
              </p>
              <p>
                <strong>{t("fineurop")}</strong> {t("fineuropDesc")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
