"use client";

import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button, buttonVariants } from "@/components/ui/button";
import { useLanguage } from "@/lib/language-context";

import Nav from "@/components/Nav";
import Foot from "@/components/Foot";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Giacomo Sepe",
            jobTitle: "Investment Manager",
            description:
              "Managing portfolio companies investors communications for shareholders. Increasing value through software systems, positioning, and messaging. Leading corporate development initiatives like capital raising, partnerships, and tech investments",
            url: "https://giacomosepe.com",
            sameAs: [
              "https://linkedin.com/in/giacomosepe",
              "https://github.com/giacomosepe",
              "https://giacomosepe.substack.com",
            ],
            alumniOf: {
              "@type": "EducationalOrganization",
              name: "Columbia Business School",
            },
            knowsAbout: [
              "Investment Management",
              "Capital Raising",
              "Business Strategy",
              "M&A",
              "Investor Relations",
              "Business Valuation",
              "Exit Strategy",
              "Software Implementation",
              "Business Positioning",
              "Investor Readiness",
              "Operations management",
            ],
            hasOccupation: {
              "@type": "Occupation",
              name: "Operations Specialist",
              description:
                "Specializes in supporting private equity investors and entrepreneurs on capital raises, capital deployment, and operations optimization by implementing systems, refining positioning, and crafting investor messaging.",
              skills: [
                "Investment Management",
                "Capital Raising Strategy",
                "Business Positioning",
                "Investor Messaging",
                "Software Systems Implementation",
                "M&A Preparation",
                "Exit Strategy",
                "Business Valuation Enhancement",
                "International Business Development",
                "Partnership Strategy",
              ],
            },
            workExample: [
              {
                "@type": "CreativeWork",
                name: "Cotolicious Exit",
                description:
                  "COO & CEO role leading to successful cash exit after 2 years through operational streamlining and strategic repositioning",
              },
              {
                "@type": "CreativeWork",
                name: "Simmetrico Transformation",
                description:
                  "Organizational redesign and product launch resulting in improved bank negotiations and product rights sale",
              },
              {
                "@type": "CreativeWork",
                name: "Camilia Acquisition",
                description:
                  "Head of Commerce role leading to successful acquisition by Swarovski through strategic client acquisition and account management",
              },
              {
                "@type": "CreativeWork",
                name: "Fineurop Soditic Client Management",
                description:
                  "Client acquisition & account management role contributing to business growth and international expansion",
              },
              {
                "@type": "CreativeWork",
                name: "Flamme Sales & Sales Ops",
                description:
                  "Sales & Sales Ops role enhancing revenue streams and operational efficiency",
              },
            ],
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What does Giacomo Sepe specialize in?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Giacomo Sepe is an investment Manager partnering with fund managers and company leaders on the work that creates shareholder value— with special focus on raising institutional capital, improving portfolio performance, and driving corporate development.",
                },
              },
              {
                "@type": "Question",
                name: "How does Giacomo Sepe help with capital raising?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "With years working on both private equity investment firms and portfolio company business operations, Giacomo helps on different areas of the capital raising process, from positioning and crafting the core messaging to anticipate investor objections all the way to managing the reporting and analyzing the performance of underlying assets and investments. His work consistently resulted in higher valuations and smoother transactions for shareholders.",
                },
              },
              {
                "@type": "Question",
                name: "What is Giacomo Sepe's background?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Giacomo Sepe holds an MBA from Columbia University and has had multiple different interests in his career. He worked as a Asset Management Specialist at Merrill Lynch (EMEA) focused on PE funds of funds. He worked as investment manager at 2 Private Equity firms (Hines and Eqvalue), and has also had corporate development roles at companies in financial services like UBS Italia, Simmetrico, and Arkadia. He has sit as CEO at Cotolicious as a venture manager of IPE Holding family office.",
                },
              },
              {
                "@type": "Question",
                name: "What services does Giacomo Sepe offer for company exits?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Giacomo Sepe offers three core services: 1) Capital raising strategy and messaging for Private Equity funds, 2) Capital deployment for both medium - large companies and private equity funds, and 3) Supporting software and sustainability transformations at medium size companies for shareholders.",
                },
              },
              {
                "@type": "Question",
                name: "How does Giacomo Sepe support Corporate development?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Giacomo Sepe supports scaling businesses by assisting companies in strategic client acquisition, partnership strategy, account management, and operational efficiency, ensuring they are well-prepared for global markets and partnerships.",
                },
              },
            ],
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Giacomo Sepe funds shareholders value consulting",
            description:
              "Operations consulting services for shareholders and entrepreneurs looking to increase company value ahead of capital raises, acquisitions, exits, and international expansion",
            provider: {
              "@type": "Person",
              name: "Giacomo Sepe",
            },
            areaServed: "Global",
            serviceType: [
              "Investment Management",
              "Capital Raising Advisory",
              "Exit Strategy",
              "M&A Preparation",
              "Business scaling",
              "Partnership Strategy",
            ],
            offers: {
              "@type": "Offer",
              description:
                "Comprehensive operations consulting to prepare companies for capital raises, acquisitions, exits, international expansion, and partnerships through software implementation, positioning refinement, and investor messaging",
            },
          }),
        }}
      />

      {/* Main Content */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {/* Left Column - Profile Picture (1/3) */}
        <div className="md:col-span-1 space-y-3 md:space-y-6">
          <Avatar className="w-48 h-48 border-2 border-border">
            <AvatarImage
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GiacomoSepe%20-%20smile%20-%20CircleBG%20red-SznDUczgMuV0GGWFk6K1cmsbCL7WYg.png"
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
              <p>
                <strong>{t("otherWork")}</strong> {t("otherWorkDesc")}
              </p>
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
