export function PersonSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Giacomo Sepe",
          jobTitle: "Investment Professional & Corporate Development Advisor",
          description:
            "Partnering with private equity fund managers on institutional capital raising and portfolio companies on value generation. Advising on corporate development, partnerships, and technology investments.",
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
            "Private Equity",
            "Institutional Capital Raising",
            "Corporate Development",
            "Portfolio Management",
            "Technology Investments",
            "Partnership Strategy",
            "Business Development",
            "Fund Management",
            "LP Relations",
            "GP Investment",
          ],
          hasOccupation: {
            "@type": "Occupation",
            name: "Investment Professional & Corporate Development Advisor",
            description:
              "Partners with private equity fund managers on institutional capital raising and supports portfolio companies on value generation through corporate development, partnerships, and technology investments.",
            skills: [
              "Institutional Capital Raising",
              "Private Equity Fund Management",
              "Portfolio Company Support",
              "Corporate Development Strategy",
              "Technology Investment Advisory",
              "Partnership Development",
              "LP/GP Relations",
              "Business Development",
              "Market Entry Strategy",
              "Value Creation",
            ],
          },
          workExample: [
            {
              "@type": "CreativeWork",
              name: "IPE Holdings Portfolio Management",
              description:
                "Investment manager overseeing hospitality, entertainment, and consumer businesses. COO at Cotolicious: built financial dashboards, streamlined operations, executed successful exit.",
            },
            {
              "@type": "CreativeWork",
              name: "De Picciotto Family Office",
              description:
                "Managed multi-company investment portfolio across hospitality and entertainment. Supported capital partnerships and divestments.",
            },
            {
              "@type": "CreativeWork",
              name: "EQValue Private Equity",
              description:
                "Investment professional: originated and closed 4 investments (€1-10M). Portfolio management and performance monitoring.",
            },
            {
              "@type": "CreativeWork",
              name: "Hines Real Estate Investment",
              description:
                "Portfolio management in institutional real estate platform working on €1bn+ deals.",
            },
            {
              "@type": "CreativeWork",
              name: "Fineurop Soditic M&A",
              description:
                "M&A advisory: originated and executed transactions worth €30M and €80M for institutional clients.",
            },
          ],
        }),
      }}
    />
  );
}
