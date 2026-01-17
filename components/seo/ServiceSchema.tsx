export function ServiceSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Giacomo Sepe - Institutional Capital Raising & Corporate Development",
          description:
            "Advisory services for private equity fund managers on institutional capital raising and portfolio companies on value generation through corporate development, partnerships, and technology investments.",
          provider: {
            "@type": "Person",
            name: "Giacomo Sepe",
          },
          areaServed: "Global",
          serviceType: [
            "Institutional Capital Raising",
            "Private Equity Fund Advisory",
            "Corporate Development Strategy",
            "Portfolio Company Support",
            "Partnership Development",
            "Technology Investment Advisory",
            "LP Relations",
            "Market Entry Strategy",
          ],
          offers: {
            "@type": "Offer",
            description:
              "Comprehensive advisory services for private equity managers raising institutional capital and portfolio companies seeking value generation through corporate development, strategic partnerships, and technology investments.",
          },
        }),
      }}
    />
  );
}
