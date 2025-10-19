export const translations = {
  en: {
    // Navbar
    chat: "Chat",
    substack: "Substack",

    // Home Page
    title: "Operations specialist",
    intro:
      "I partner with shareholders and entrepreneurs to support capital raising, partnerships, and international expansion.",
    approach:
      "My approach combines three elements: implementing software and systems to reduce dependency from CEO or key team members, refining positioning and sales documents to strengthen competitiveness, and crafting messaging to anticipate potential investors and partners objections when raising capital or selling shares.",
    dayToDay:
      "On a day to day, I run special projects that bring structure and messaging clarity to company leadership.",
    result:
      "The result: businesses become investor-grade, scalable, and predictable—commanding higher valuations and smoother transactions.",

    // Background
    background:
      "Background: MBA Columbia University, Sales at Merrill Lynch (EMEA) and Arkadia, Project Manager at Hines (Milano Porta Nuova) and UBS Italia, Operating partner at EQValue Private Equity, Operations manager at UBS Italia, Simmetrico, and CEO at Cotolicious",

    // Completed Work
    completedWork: "Completed Work",
    cotolicious: "IPE holding family office —",
    cotoliciousDesc:
      "Portfolio advisor and COO of Cotolicious. Streamlined workflows and software, created data dashboard, launched online service.",
    picciotto: "Picciotto family office —",
    picciottoDesc: "Portfolio manager and financial communication for new partnerships and divestments.",
    simmetrico: "Simmetrico",
    simmetricoDesc:
      "— Redesigned org chart, built cash flow dashboard, launched productized service. Result: improved bank negotiations, product rights sold to Chinese distributor.",
    otherWork: "Chamilia",
    otherWorkDesc: "(acquired by Swarovski) — Head of Commerce.",
    eqvalue: "EQValue Private equity investment club",
    eqvalueDesc:
      "— Portfolio manager and investors relations for private equity investments in small and medium businesses.",
    fineurop: "Fineurop Soditic",
    fineuropDesc: "— Client acquisition & account management.",
    flamme: "Flamme",
    flammeDesc: "— Sales & Sales Ops.",

    // Contact Page
    contactTitle: "Easiest way to reach me",
    contactSubtitle:
      "Happy to talk about leadership, software and the transformations that make companies more valuable.",
    nameLabel: "Name",
    namePlaceholder: "Your name",
    emailLabel: "Email",
    emailPlaceholder: "your.email@example.com",
    messageLabel: "Message",
    messagePlaceholder: "Your message...",
    submitButton: "Send your note to Giacomo",
    submitting: "Sending...",
    successMessage: "Your message successfully landed in my inbox. I will be in touch within a few hours.",
    errorMessage: "Something went wrong. Please try again or email me directly.",
  },
  it: {
    // Navbar
    chat: "Contatti",
    substack: "Substack",

    // Home Page
    title: "Specialista Operations e comunicazione finanziaria",
    intro:
      "Collaboro con azionisti e imprenditori per supportare la raccolta di capitali, partnership ed espansione internazionale.",
    approach:
      "Il mio approccio combina tre elementi: implementare software e sistemi per ridurre la dipendenza dal CEO o dai membri chiave del team, perfezionare il posizionamento e i documenti di vendita per rafforzare la competitività e creare messaggi per anticipare le obiezioni di potenziali investitori e partner durante la raccolta di capitali o la vendita di azioni.",
    dayToDay:
      "Quotidianamente, gestisco progetti speciali che portano struttura e chiarezza nella comunicazione alla leadership aziendale.",
    result:
      "Il risultato: le aziende diventano pronte per gli investitori, scalabili e prevedibili, ottenendo valutazioni più elevate e transazioni più fluide.",

    // Background
    background:
      "Background: MBA Columbia University, Sales presso Merrill Lynch (EMEA) e Arkadia, Project Manager presso Hines (Milano Porta Nuova) e UBS Italia, Operating partner presso EQValue Private Equity, Operations manager presso UBS Italia, Simmetrico, e CEO presso Cotolicious",

    // Completed Work
    completedWork: "Lavori Completati",
    cotolicious: "IPE holding family office —",
    cotoliciousDesc:
      "Portfolio advisor e COO di Cotolicious. Ottimizzato flussi di lavoro e software, creato dashboard dati, lanciato servizio online.",
    picciotto: "Picciotto family office —",
    picciottoDesc: "Portfolio manager e comunicazione finanziaria per nuove partnership e dismissioni.",
    simmetrico: "Simmetrico",
    simmetricoDesc:
      "— Ridisegnato organigramma, costruito dashboard del flusso di cassa, lanciato servizio productizzato. Risultato: migliorate negoziazioni bancarie, diritti del prodotto venduti a distributore cinese.",
    otherWork: "Chamilia",
    otherWorkDesc: "(acquisita da Swarovski) — Head of Commerce.",
    eqvalue: "EQValue Private equity investment club",
    eqvalueDesc:
      "— Portfolio manager e investor relations per investimenti di private equity in piccole e medie imprese.",
    fineurop: "Fineurop Soditic",
    fineuropDesc: "— Acquisizione clienti e gestione account.",
    flamme: "Flamme",
    flammeDesc: "— Sales & Sales Ops.",

    // Contact Page
    contactTitle: "Il modo più semplice per contattarmi",
    contactSubtitle:
      "Felice di parlare di leadership, software e delle trasformazioni che rendono le aziende più preziose.",
    nameLabel: "Nome",
    namePlaceholder: "Il tuo nome",
    emailLabel: "Email",
    emailPlaceholder: "tua.email@esempio.com",
    messageLabel: "Messaggio",
    messagePlaceholder: "Il tuo messaggio...",
    submitButton: "Invia il tuo messaggio a Giacomo",
    submitting: "Invio in corso...",
    successMessage:
      "Il tuo messaggio è arrivato con successo nella mia casella di posta. Ti risponderò entro poche ore.",
    errorMessage: "Qualcosa è andato storto. Riprova o inviami un'email direttamente.",
  },
}

export type Language = keyof typeof translations
export type TranslationKey = keyof typeof translations.en
