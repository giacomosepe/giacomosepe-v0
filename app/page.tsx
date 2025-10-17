import Link from "next/link"
import { Github, Linkedin } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Giacomo Sepe",
            jobTitle: "Operations Specialist",
            description:
              "Operations specialist helping shareholders and entrepreneurs increase company value through software systems, positioning, and messaging for capital raising, partnerships, and international expansion",
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
              "Operations Management",
              "Capital Raising",
              "Business Strategy",
              "M&A",
              "Investor Relations",
              "Business Valuation",
              "Exit Strategy",
              "Software Implementation",
              "Business Positioning",
              "Investor Readiness",
              "International Expansion",
            ],
            hasOccupation: {
              "@type": "Occupation",
              name: "Operations Specialist",
              description:
                "Specializes in preparing companies for capital raises, acquisitions, and exits by implementing operational systems, refining positioning, and crafting investor messaging. Also supports international expansion and partnerships.",
              skills: [
                "Operations Management",
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
                description: "Sales & Sales Ops role enhancing revenue streams and operational efficiency",
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
                  text: "Giacomo Sepe is an operations specialist who helps shareholders and entrepreneurs increase company value through software systems implementation, business positioning, and investor messaging. He specializes in preparing companies for capital raises, acquisitions, and exits, as well as supporting international expansion and partnerships.",
                },
              },
              {
                "@type": "Question",
                name: "How does Giacomo Sepe help with capital raising?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Giacomo helps companies become investor-ready by implementing software and systems to reduce dependency on key team members, refining positioning to strengthen competitiveness, and crafting messaging to anticipate investor objections. This approach results in higher valuations and smoother transactions.",
                },
              },
              {
                "@type": "Question",
                name: "What is Giacomo Sepe's background?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Giacomo Sepe holds an MBA from Columbia University and has worked as a Sales Specialist at Merrill Lynch (EMEA) and Arkadia, Project Manager at Hines (Milano Porta Nuova) and UBS Italia, Operating Partner at EQValue Private Equity, Operations Manager at UBS Italia, Simmetrico, and CEO at Cotolicious.",
                },
              },
              {
                "@type": "Question",
                name: "What services does Giacomo Sepe offer for company exits?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Giacomo Sepe offers three core services for company exits: 1) Implementing software and operational systems to reduce key person dependency, 2) Refining business positioning and sales documents to strengthen market competitiveness, and 3) Crafting investor messaging to address potential objections during capital raises or share sales.",
                },
              },
              {
                "@type": "Question",
                name: "How does Giacomo Sepe support international expansion?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Giacomo Sepe supports international expansion by assisting companies in strategic client acquisition, account management, and operational efficiency, ensuring they are well-prepared for global markets and partnerships.",
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
            name: "Giacomo Sepe Operations Consulting",
            description:
              "Operations consulting services for shareholders and entrepreneurs looking to increase company value ahead of capital raises, acquisitions, exits, and international expansion",
            provider: {
              "@type": "Person",
              name: "Giacomo Sepe",
            },
            areaServed: "Global",
            serviceType: [
              "Operations Consulting",
              "Capital Raising Advisory",
              "Exit Strategy",
              "M&A Preparation",
              "International Expansion",
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

      {/* Navbar */}
      <nav className="border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="text-xl md:text-2xl font-semibold text-foreground hover:text-[#6d0e2b] transition-colors"
            >
              Giacomo Sepe
            </Link>
            <div className="flex items-center gap-6">
              <Link
                href="/contact"
                className="text-base md:text-sm text-muted-foreground hover:text-[#6d0e2b] hover:font-bold transition-all"
              >
                Chat
              </Link>
              <a
                href="https://giacomosepe.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base md:text-sm text-muted-foreground hover:text-[#6d0e2b] hover:font-bold transition-all"
              >
                Substack
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Left Column - Profile Picture (1/3) */}
          <div className="md:col-span-1 space-y-3 md:space-y-6">
            <Avatar className="w-48 h-48 border-2 border-border">
              <AvatarImage
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GiacomoSepe%20-%20smile%20-%20CircleBG%20red-SznDUczgMuV0GGWFk6K1cmsbCL7WYg.png"
                alt="Giacomo Sepe - Operations Specialist"
              />
              <AvatarFallback className="text-4xl bg-secondary text-secondary-foreground">GS</AvatarFallback>
            </Avatar>

            <div>
              <p className="text-xl md:text-2xl font-medium text-foreground">Operations specialist</p>
            </div>

            <div className="pt-4 hidden md:block">
              <p className="text-base md:text-sm text-[#4A5568] leading-relaxed italic">
                Background: MBA Columbia University, Sales at Merrill Lynch (EMEA) and Arkadia, Project Manager at Hines
                (Milano Porta Nuova) and UBS Italia, Operating partner at EQValue Private Equity, Operations manager at
                UBS Italia, Simmetrico, and CEO at Cotolicious
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
              <p>
                I partner with shareholders and entrepreneurs to support capital raising, partnerships, and
                international expansion.
              </p>

              <p>
                My approach combines three elements: implementing software and systems to reduce dependency from CEO or
                key team members, refining positioning and sales documents to strengthen competitiveness, and crafting
                messaging to anticipate potential investors and partners objections when raising capital or selling
                shares.
              </p>

              <p>
                On a day to day, I run special projects that bring structure and messaging clarity to company
                leadership.
              </p>

              <p>
                The result: businesses become investor-grade, scalable, and predictable—commanding higher valuations and
                smoother transactions.
              </p>
            </div>

            <div className="pt-4 block md:hidden">
              <p className="text-base md:text-sm text-[#4A5568] leading-relaxed italic">
                Background: MBA Columbia University, Sales at Merrill Lynch (EMEA) and Arkadia, Project Manager at Hines
                (Milano Porta Nuova) and UBS Italia, Operating partner at EQValue Private Equity, Operations manager at
                UBS Italia, Simmetrico, and CEO at Cotolicious
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
              <h2 className="text-xl md:text-lg font-semibold mb-3">Completed Work</h2>
              <div className="space-y-3 text-base md:text-sm text-foreground leading-relaxed">
                <p>
                  <strong>Cotolicious</strong> (sold to competitor) — COO & CEO. Streamlined operations, repositioned
                  offering, implemented ERP and data systems. Result: successful cash exit after 2 years.
                </p>
                <p>
                  <strong>Simmetrico</strong> — Redesigned org chart, built cash flow dashboard, launched productized
                  service. Result: improved bank negotiations, product rights sold to Chinese distributor.
                </p>
                <p>
                  <strong>Camilia</strong> (acquired by Swarovski) — Head of Commerce. <strong>Fineurop Soditic</strong>{" "}
                  — Client acquisition & account management. <strong>Flamme</strong> — Sales & Sales Ops.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-border mt-auto">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center justify-center">
            <span className="text-muted-foreground text-base md:text-sm">Giacomo Sepe {new Date().getFullYear()}</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
