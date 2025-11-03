export const translations = {
	en: {
		// Navbar
		chat: "Chat",
		substack: "Substack",

		// Home Page
		title: "Operations, Financial Communications",
		intro:
			"I partner with shareholders and entrepreneurs as they plan for strategic transformations. Capital raising, partnerships for (international) expansion, relevant tech transformations or organizational restructuring are some of the main turning points. I help them navigate during these defining moments and to communicate to new investors and partners real and potential value of the business.",
		approach:
			"After years of working with companies I noticed that three key areas have a high impact on valuation: Scalability: have systems in place to streamline processes, making delivery smooth and taking activities off the schedule of the CEO; Execution: rely on technology and knowledge to help employees deal with complexity, avoid sylos, and learn continuously; Clarity: define very strongly positioning and messaging, identify key metrics and communicate them to investors and partners with simple and effective messaging.",
		dayToDay:
			"On a day to day, I run special projects that simplify work and clarify communications.",
		result:
			"After a few months working together, companies are better positioned to get higher value from investors, thanks to clear, long-term, and shared vision, simple, repeatable, and autonomous revenue processes, and effective pitches for sales, partners / distributors, and investors.",

		// Background
		background:
			"Background: MBA Columbia University, Sales at Merrill Lynch (EMEA) and Arkadia, Project Manager at Hines (Milano Porta Nuova) and UBS Italia, Operating partner at EQValue Private Equity, Operations manager at UBS Italia, Simmetrico, and CEO at Cotolicious",

		// Completed Work
		completedWork: "Completed Work",
		cotolicious: "IPE holding family office —",
		cotoliciousDesc:
			"Portfolio advisor and COO of Cotolicious. Streamlined workflows and software, created data dashboard, launched online service.",
		picciotto: "Picciotto family office —",
		picciottoDesc:
			"Portfolio manager and financial communication for new partnerships and divestments.",
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
		successMessage:
			"Your message successfully landed in my inbox. I will be in touch within a few hours.",
		errorMessage:
			"Something went wrong. Please try again or email me directly.",
	},
	it: {
		// Navbar
		chat: "Contatti",
		substack: "Substack",

		// Home Page
		title: "Specialista Operations e comunicazione strategica",
		intro:
			"Collaboro con azionisti e imprenditori quando pianificano una trasformazione strategica come un aumento di capitale, partnership per lo sviluppo (internazionale), investimenti tecnologici o ristrutturazioni industriali. Li aiuto a rendere piu' appetibile l'azienda a potenziali partner e investitori.",
		approach:
			" Dopo anni di lavoro a fianco di diverse aziende, ho capito che tre aree chiave incidono in modo decisivo sul valore di un’impresa: Scalabilità: creare sistemi che semplificano i processi, rendono l’operatività fluida e liberano tempo al CEO. Execution: integrare tecnologia e competenze per aiutare i team a gestire la complessità, evitare i silos e apprendere in modo continuo. Chiarezza: definire con precisione il posizionamento e il messaging, individuare gli indicatori economici e finanziari più rilevanti e comunicarli  in modo semplice ed efficace a investitori e partner.",
		dayToDay:
			"Nella pratica quotdiana, in sostanza gestisco progetti speciali con l'obiettivo di semplificare il lavoro e aumentare la chiarezza della comunicazione strategica.",
		result:
			"Dopo pochi mesi di collaborazione le aziende sono meglio strutturate per una negoziazione con possibili interlocutori grazie a una visione chiara e condivisa, processi di lavoro semplificati e autonomi, e una documentazione chiara a supporto delle negoziazione con partner e investitori.",

		// Background
		background:
			"Background: MBA Columbia University, Sales presso Merrill Lynch (EMEA) e Arkadia, Project Manager presso Hines (Milano Porta Nuova) e UBS Italia, Operating partner presso EQValue Private Equity, Operations manager presso UBS Italia, Simmetrico, e CEO presso Cotolicious",

		// Completed Work
		completedWork: "Lavori Completati",
		cotolicious: "IPE holding family office —",
		cotoliciousDesc:
			"Portfolio advisor e COO di Cotolicious. Ottimizzato flussi di lavoro e software, creato dashboard dati, lanciato servizio online.",
		picciotto: "Picciotto family office —",
		picciottoDesc:
			"Portfolio manager e comunicazione finanziaria per nuove partnership e dismissioni.",
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
		errorMessage:
			"Qualcosa è andato storto. Riprova o inviami un'email direttamente.",
	},
};

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.en;
