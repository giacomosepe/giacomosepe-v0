export function FAQSchema() {
  return (
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
                text: "Giacomo Sepe partners with private equity fund managers on institutional capital raising and supports portfolio companies on value generation. He works at the intersection of capital, communications, and technology, helping tech-driven managers raise institutional capital and advising companies on corporate development, partnerships, and product innovation.",
              },
            },
            {
              "@type": "Question",
              name: "How does Giacomo Sepe help with capital raising?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "With 15 years across private equity firms (EQValue, Hines), family offices (De Picciotto, IPE Holdings), and operating roles, Giacomo helps fund managers articulate their investment thesis to institutional investors. He has experience on both sides—as LP investor (Merrill Lynch, UBS) and GP investor (Hines, EQValue)—giving him deep understanding of what institutional investors need to hear.",
              },
            },
            {
              "@type": "Question",
              name: "What is Giacomo Sepe's background?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Giacomo Sepe holds an MBA from Columbia University. He started in Alternative Asset Management at Merrill Lynch and UBS, moved into Private Equity Investment management at Hines (€1bn+ deals), helped establish PE technology firm EQValue as investment relations and project manager (€1-10M range), and most recently served as investment manager at family offices De Picciotto and IPE Holdings.",
              },
            },
            {
              "@type": "Question",
              name: "What companies does Giacomo Sepe advise?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Giacomo Sepe advises Fain Ascensores on Italian corporate development strategy and Arkadia financial services on partnerships and product innovation. He helps companies develop new products and enter new markets, bringing expertise from both investor and operator perspectives.",
              },
            },
            {
              "@type": "Question",
              name: "How does Giacomo Sepe support portfolio companies?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Giacomo Sepe supports portfolio companies on value generation through corporate development initiatives, partnership strategy, and technology investments. His experience includes portfolio operations management at EQValue and IPE Holding, plus interim CFO/COO roles at founder-led companies.",
              },
            },
          ],
        }),
      }}
    />
  );
}
